import React, { useState , useEffect} from "react";
import useAuth from "../hooks/useAuth";
import { globalContext } from "~/lib/context/globalContext";
import axios from "axios";

interface props {
    children: React.ReactNode
}
const GlobalProvider:React.FC<props> = ({children}) => {
    const [currentWord, setCurrentWord] = useState("");
    const [customWord, setCustomWord] = useState ('')
  const [guessState, setGuessState] = useState<CharType[][]>([]);
  const [turn, setTurn] = useState(0);
  const [indexX, setX] =useState (0)
  const [indexY, setY] = useState (0)
  const [gameCount, setGameCount] = useState (0)
  const {user} = useAuth ()


  interface response {
    data: string[];
  }

  const fetchWord = () => {
    axios
      .get("https://random-word-api.herokuapp.com/word?length=5")
      .then((response: response) => {
        setCurrentWord?.(response.data[0] ? response.data[0] : "");
      })
      .catch((error) => {
        console.log (error)
      });
  };

  useEffect(() => {
    fetchWord();
    setGuessState?. ([])
    setTurn?. (0)
    setX?.(0)
    setY?.(0)
  }, [gameCount, customWord]);
  return (<globalContext.Provider value={{currentWord, guessState, setGuessState, turn, setTurn, indexX, setX, setY, indexY, setGameCount, gameCount}}>

        {children}
  </globalContext.Provider>)
}

export default GlobalProvider