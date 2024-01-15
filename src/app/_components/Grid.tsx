import { useContext } from "react"
import { globalContext } from "~/lib/context/globalContext"
interface props {
    indexX: number
    indexY:number
}
const Item:React.FC<props> = ({indexX, indexY})=> {

    const {guessState, turn} = useContext (globalContext)

    const itemActive = ()=> {
        return ((guessState?.[indexX]?.[indexY]) && ((turn??0) > indexX)) ? true :false
    }
    const getColor = () => {
        if (itemActive ())
        {
            if (guessState?.[indexX]?.[indexY]?.status === 'match' )
                return "bg-[#79B851]"
            else if (guessState?.[indexX]?.[indexY]?.status === 'partial-match')
                return "bg-[#F3C237]"
            else if ((guessState?.[indexX]?.[indexY]?.status === 'no-match'))
                return "bg-[#A4AEC4]"
        }
        return "bg-gay-500/20"
    }
    return <div className={`w-[50px] h-[50px] rounded-sm border-2 border-mediumGray/60 ${getColor ()} flex justify-center items-center `}>
        <p className={`text-[20px] font-semibold dark:text-white  ${itemActive () ? 'text-white': 'text-[#313E51]'}`}>{(guessState?.[indexX]?.[indexY])? guessState?.[indexX]?.[indexY]?.char.toUpperCase () : ''}</p>
    </div>
}

interface RowProps {
    index: number
}
const Row:React.FC<RowProps> = ({index}) => {

    const itemsArray:React.ReactElement[] = []

    for (let i = 0; i < 5; i++)
        itemsArray.push (<Item key={i} indexX={index} indexY={i} />)
    return <div className="flex gap-2">
        {itemsArray}
    </div>
}

const Grid:React.FC = ({}) => {

    const rowsArray: React.ReactElement[] = []

    for (let i = 0; i < 6; i++)
        rowsArray.push (<Row key={i}  index={i}/>)
    return <div className="flex flex-col gap-2 justify-center items-center">
        {rowsArray}
    </div>
}

export default Grid