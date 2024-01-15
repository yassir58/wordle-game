import { initTRPC } from "@trpc/server";
import { db } from "../db";
// import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

// type CreateContextOptions = Record<string, never>;


export const createTRPCContext = () => {
  return {
    db
  }
};


const trpc = initTRPC.context<typeof createTRPCContext>().create({
  errorFormatter({ shape }) {
    return shape;
  },
});
// const trpc = initTRPC.create ()

export const router = trpc.router;
export const publicProcedure = trpc.procedure;