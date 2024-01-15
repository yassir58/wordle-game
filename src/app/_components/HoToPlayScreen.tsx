const HowToPlay: React.FC = ({}) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[60%] flex-col justify-center items-center gap-4">
        <h1 className="text-[25px] font-semibold text-navy dark:text-white">
          How To Play
        </h1>

        <p className="text-md text-mediumGray dark:text-lightGray px-12">
          You have to guess the hidden word in 6 tries and the color of the
          letters changes to show how close you are. To start the game, just
          enter any word, for example:
        </p>

        <div className="flex items-center justify-center gap-3">
          <div className="h-[60px] w-[60px] justify-center items-center flex  rounded-md bg-[#A4AEC4] text-[21px] font-semibold text-white">
            T
          </div>
          <div className="h-[60px] w-[60px] justify-center items-center flex  rounded-md bg-[#F3C237] text-[21px] font-semibold text-white">
            A
          </div>
          <div className="h-[60px] w-[60px] justify-center items-center flex  rounded-md bg-[#A4AEC4] text-[21px] font-semibold text-white">
            B
          </div>
          <div className="h-[60px] w-[60px] justify-center items-center flex  rounded-md bg-[#F3C237] text-[21px] font-semibold text-white">
            L
          </div>
          <div className="h-[60px] w-[60px] justify-center items-center flex  rounded-md bg-[#79B851] text-[21px] font-semibold text-white">
            E
          </div>
        </div>
        <div className="flex flex-col items-start mt-7 justify-start gap-3 rounded-md dark:text-white dark:bg-darkNavy bg-lightGray p-4">
          <div className="flex items-start justify-start gap-2">
            <div className="flex gap-1">
              <div className=" h-[8px] w-[8px] flex justify-center items-center p-4 rounded-md bg-[#A4AEC4] text-sm font-semibold text-white ">
                T
              </div>
              <div className=" h-[8px] w-[8px] flex justify-center items-center p-4 rounded-md bg-[#A4AEC4] text-sm font-semibold text-white ">
                B
              </div>
            </div>
            <p>aren't in the target word at all.</p>
          </div>
          <div className="flex items-start justify-start gap-2">
            <div className="flex gap-1">
              <div className=" h-[8px] w-[8px] flex justify-center items-center p-4 rounded-md bg-[#F3C237] text-sm font-semibold text-white">
                A
              </div>
              <div className=" h-[8px] w-[8px] flex justify-center items-center p-4 rounded-md bg-[#F3C237] text-sm font-semibold text-white">
                L
              </div>
            </div>
            <p>is in the word but in the wrong spot.</p>
          </div>
          <div className="flex items-start justify-start gap-2">
            <div className="flex gap-1">
              <div className=" h-[8px] w-[8px] flex justify-center items-center p-4 rounded-md bg-[#79B851] text-sm font-semibold text-white">
                E
              </div>
            </div>
            <p>is in the word and in the correct spot.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HowToPlay