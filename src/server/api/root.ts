import { publicProcedure, router } from "~/server/api/trpc";
import { NextResponse } from "next/server";
import z from "zod";
import {hash} from 'bcrypt'
import gameRouter from "./routers/gameRouter";
import statsRouter from "./routers/statsRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({

  gameRouter:gameRouter,
  statsRouter:statsRouter

});
// export type definition of API
export type AppRouter = typeof appRouter;
