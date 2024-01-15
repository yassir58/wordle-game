import useAuth from "~/lib/hooks/useAuth";
import { trpc } from "../_trpc/client";

const GameStats = ({}) => {
  const { user } = useAuth();
  const { data: stats } = trpc.statsRouter.getGameStats.useQuery({
    userId: user?.id ?? "",
  });
  const { data: games } = trpc.gameRouter.getAllGames.useQuery({
    userId: user?.id ?? "",
  });

  return (
    <>
      {user ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <h1 className="text-[25px] font-semibold text-navy dark:text-white">
            Game Statistics
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-lines p-4 dark:bg-darkNavy">
              <p className="text-[30px] font-semibold text-navy dark:text-white">
                {stats?.gameCount}
              </p>
              <p className="text-sm text-mediumGray dark:text-mainPurple">
                GAMES PLAYED 🕹️
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-lines p-4 dark:bg-darkNavy">
              <p className="text-[30px] font-semibold text-navy dark:text-white">
                {stats?.wins}
              </p>
              <p className="text-sm text-mediumGray dark:text-mainPurple">
                GAMES WON 🏆
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-lines p-4 dark:bg-darkNavy">
              <p className="text-[30px] font-semibold text-navy dark:text-white">
                {stats?.loses}
              </p>
              <p className="text-sm text-mediumGray dark:text-mainPurple">
                GAMES LOST ❌
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-lines p-4 dark:bg-darkNavy">
              <p className="text-[30px] font-semibold text-navy dark:text-white">
                {stats?.winRate}
              </p>
              <p className="text-sm text-mediumGray dark:text-mainPurple">
                WIN RATE 📈
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-lines p-4 dark:bg-darkNavy">
              <p className="text-[30px] font-semibold text-navy dark:text-white">
                {stats?.lossRate}
              </p>
              <p className="text-sm text-mediumGray dark:text-mainPurple">
                LOSS RATE 📈
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-lines p-4 dark:bg-darkNavy">
              <p className="text-[30px] font-semibold text-navy dark:text-white">
                {stats?.bestTry}
              </p>
              <p className="text-sm text-mediumGray dark:text-mainPurple">
                BEST TRY 💎
              </p>
            </div>
          </div>
          <div className="flex h-full max-h-[40vh] w-full flex-col items-center justify-center gap-6 overflow-y-auto">
            <h1 className="mt-6 text-[20px] font-semibold text-navy dark:text-white">
              Game History
            </h1>
            <div className="flex h-full w-full flex-col items-center justify-center gap-2">
              {games?.map((game, index) => {
                return <GameItem game={game} key={index} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-[25px] font-semibold text-navy dark:text-white">
            Login to see you stats
          </h1>
        </div>
      )}
    </>
  );
};

interface props {
  game: Game;
}
export const GameItem: React.FC<props> = ({ game }) => {
  return (
    <div className="flex w-[80%] items-center justify-between gap-6 rounded-md bg-lines px-4 py-2 dark:bg-darkNavy lg:w-[60%]">
      <span className="font-semibold text-darkNavy dark:text-white">
        SOLUTION {" : "}
        <span className="text-sm text-mediumGray dark:text-mainPurple">
          {game.solution}
        </span>
      </span>
      <div className="h-6 border-r border-t border-mediumGray dark:border-lightGray"></div>
      <span className="font-semibold text-darkNavy dark:text-white">
        RESULT{" : "}
        <span className="text-sm text-mediumGray dark:text-mainPurple">
          {game.status}
        </span>
      </span>
      <div className="h-6 border-r border-t border-mediumGray dark:border-lightGray"></div>
      <span className="font-semibold text-darkNavy dark:text-white">
        NUMBER OF TRIES{" : "}
        <span className="text-sm text-mediumGray dark:text-mainPurple">
          {game.tryNumber}
        </span>
      </span>
    </div>
  );
};
export default GameStats;
