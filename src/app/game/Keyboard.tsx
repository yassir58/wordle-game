import useWordAnalyser from "~/lib/hooks/useWordAnalyser";
import { keyBoardRows } from "../../../constants";
import { MdOutlineBackspace } from "react-icons/md";

interface props {
  setIsOpen?:(value:boolean) => void
  setStatus?:(value:boolean) => void
}
const Keyboard: React.FC<props> = ({setIsOpen, setStatus}) => {

    const {analyseWord, handleSubmit, handleReturn} = useWordAnalyser (setIsOpen, setStatus)
  return (
    <div className="grid-cols-20 grid w-full justify-center gap-1">
      {keyBoardRows?.map((item, index) => {
        return (
          <button
            id={item.char}
            onClick={()=> {
              console.log (item.char)
              if (item.char === 'Enter')
                handleSubmit ();
              else if (item.char === 'Backspace')
                handleReturn ()
              else
                analyseWord (item.char.toLowerCase ());
            }}
            className={`keyboard-btn
            ${item.char === ' ' ? 'opacity-0' : ''}
            ${
              item.char === "Enter" || item.char === "Backspace"
                ? "col-span-3"
                : "col-span-2"
            }`}
            key={index}
          >
            {item?.char === 'Backspace' ? <MdOutlineBackspace/> : item?.char}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
