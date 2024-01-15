import { useRouter } from "next/navigation";
import { useContext } from "react";
import { globalContext } from "~/lib/context/globalContext";

interface props {
  setIsOpen: (value: boolean) => void;
  status: boolean;
  setStatus: (value: boolean) => void;
}
const GameStatus: React.FC<props> = ({ setIsOpen, status, setStatus }) => {
  const { currentWord, setGameCount, gameCount} =
    useContext(globalContext);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 pb-4">
      <p
        className={`text-[21px]   ${
          status ? "text-[#26D782]" : "text-[#EE5454]"
        } font-semibold`}
      >
        {status ? "Good Job" : "You Lost"}
      </p>
      <div className="flex items-center justify-center gap-2">
        <p className="text-sm text-[#626C7F] dark:text-white">
          the solution was :{" "}
        </p>
        <p className=" text-sm font-semibold text-[#A729F5]">{currentWord}</p>
      </div>
      <button
        className="primary-btn mt-4"
        onClick={() => {
          setGameCount?.((gameCount ?? 0) + 1);
          setIsOpen?.(false);
          setStatus(false);
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default GameStatus;
