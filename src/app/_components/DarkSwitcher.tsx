import { useEffect, useRef, useState } from "react"
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface props {
    isOn: boolean
}
const Switcher:React.FC<props> = ({isOn}) => {
    return <button className={`w-[40px] h-[20px] bg-mainPurple rounded-full flex ${isOn ? 'justify-end' : 'justify-start'  }`}>
        <div className='h-[20px] w-[20px] rounded-full bg-white'></div>
    </button>
}
const DarkModeSwitcher:React.FC = ({}) => {

    const [isDark, setDark] = useState  (false)

    useEffect (()=> {
        const isDarkMode = localStorage.getItem ('darkMode') === 'true'
        setDark (isDarkMode)
    }, [])

    useEffect (() => {
        document.documentElement.classList.toggle ("dark", isDark)
        localStorage.setItem ("darkMode", `${isDark}`)
    }, [isDark])

   
    const toggleDarkModa = () => {
        
            setDark ((prev) => !prev)
    }
    return (<div className="w-[96%] gap-6  rounded-md flex justify-center items-center" id='darkSwitcher' onClick={toggleDarkModa} onKeyDown={(e) => e.preventDefault ()} >
        <MdLightMode className={`${isDark ? 'text-mediumGray' : 'text-mainPurple'}`} />
        <Switcher isOn={isDark} />
        <BsFillMoonStarsFill className={`${isDark ? 'text-mainPurple' : 'text-mediumGray'}`}/>
    </div>)
}

export default DarkModeSwitcher