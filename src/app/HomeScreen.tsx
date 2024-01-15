
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { globalContext } from "~/lib/context/globalContext"

// interface props {}

const HomeScreen:React.FC = ({}) => {
  const router = useRouter ()

    return (<div className="flex flex-col gap-3">
        
        <button onClick={()=> {
            

        }} className='px-6 py-4 rounded-sm text-white bg-blue-400'>start game</button>
    </div>)
}

export default HomeScreen