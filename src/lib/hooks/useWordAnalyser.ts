import { useContext, useState } from "react";
import { globalContext } from "../context/globalContext";
import isAlpha from "../utlis";
import toast from "react-hot-toast";
import { trpc } from "~/app/_trpc/client";
import useAuth from "./useAuth";
const useWordAnalyser = (setIsOpen?:(value:boolean)=> void, setStatus?:(value:boolean) => void) => {
  const {
    currentWord,
    guessState,
    setGuessState,
    indexX,
    indexY,
    setX,
    setY,
    setTurn,
    turn,
  } = useContext(globalContext);
  const utils = trpc.useUtils ()
  const newGameMutation = trpc.gameRouter.createGame.useMutation ({
    onSuccess:() => {
      toast.success ('Game history created successfully')
      utils.gameRouter.invalidate ()
      utils.statsRouter.invalidate ()
    },
    onError: () => toast.error ('Failed to create game history')
  })
  const {user} = useAuth ();
  const newGame = (status:string) => {
    newGameMutation.mutateAsync ({
      userId:user?.id??'',
      solution:(currentWord??''),
      tryNumber:(turn??0),
      status:status
    })
  }
  const checkResult = () => {
    const successCount = guessState?.[indexY ?? 0]?.filter(
      (obj) => obj.status === "match",
    ).length;
    if (successCount === 5){
      if (user)
        newGame ('win')
      setIsOpen && setIsOpen(true)
      setStatus?.(true)
    }
    else if (successCount != 5 && turn === 5){
        if (user)
          newGame ('loss')
        setIsOpen && setIsOpen (true)}
  };

  const handleSubmit = () => {
    if ((guessState?.[indexY ?? 0]?.length??0) === 5) {
      checkResult();
      setX?.(0);
      setY?.((indexY ?? 0) + 1);
      setTurn?.((turn ?? 0) + 1);
    } else toast.error("Make sure you have 5 characters");
  };

  const handleReturn = () => {
    const guessTemp = guessState ?? [];
    if ((turn ?? 0) < 6 && (indexX ?? 0) > 0) {
      const temp =  guessTemp[indexY ?? 0] ?? [];
      temp.pop ()
      console.log(temp);
      guessTemp[indexY ?? 0] = temp;
      setGuessState?.(guessTemp ?? []);
      setX?.((indexX ? indexX : 0) - 1);
    }
  };

  const analyseWord = (key: string) => {
    const guessTemp = guessState ?? [];
    const temp =  guessState?.[indexY ?? 0] ?? [];

    if ((guessState?.[indexY ?? 0]?.length??0)< 5) {
      console.log ('letter pushed')
      if (key === currentWord?.[indexX ? indexX : 0])
        temp.push({
          char: `${key}`,
          status: "match",
          color: "bg-green-500",
        });
      else if (currentWord?.includes(`${key}`)) {
        temp.push({
          char: `${key}`,
          status: "partial-match",
          color: "bg-red-500",
        });
      } else {
        temp.push({
          char: `${key}`,
          status: "no-match",
          color: "bg-yellow-500",
        });
      }
      guessTemp[indexY ?? 0] = temp;
      setGuessState?.(guessTemp ?? []);
      setX?.((indexX ? indexX : 0) + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key != " ") {
      if (e.key == "Enter") handleSubmit();
      else if (e.key == "Backspace") handleReturn();
      else if (isAlpha(e.key)) {
        console.log(e.key);
        analyseWord(e.key);
      }
    }
  };

  return {
    analyseWord,
    handleSubmit,
    handleReturn,
    handleKeyDown,
  };
};

export default useWordAnalyser;
