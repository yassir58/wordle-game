import { z } from "zod";
import { publicProcedure, router } from "../trpc";

const statsRouter = router({
  getGameStats: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const gamesPlayed = await ctx.db.game.count({
        where: {
            userId: input.userId,
          }
      });
      const allGames = await ctx.db.game.findMany({
        where: {
          userId: input.userId,
        },
      });
      const wins = allGames.filter (game => game.status === 'win').length
      const loses = allGames.filter (game => game.status === 'loss').length
      const winRate = Math.floor((wins / gamesPlayed) * 100) ?? 0;
      const lossRate = Math.floor((loses / gamesPlayed) * 100) ?? 0;
      let bestTry = allGames[0]?.tryNumber ?? 0;

      for (let i =0; i < gamesPlayed;i++)
      {
        if ((allGames?.[i]?.tryNumber??0) < bestTry)
            bestTry = allGames[i]?.tryNumber ?? 0
      }

      return {
        gameCount:gamesPlayed,
        wins: wins,
        loses: loses,
        winRate: winRate,
        lossRate: lossRate,
        bestTry: bestTry
      }
    }),
});


export default statsRouter