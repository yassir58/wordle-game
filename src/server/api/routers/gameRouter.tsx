import { z } from "zod";
import { publicProcedure, router } from "../trpc";

const gameRouter = router ({
    getUsers:publicProcedure.query (async ({ctx})=>{
        return await ctx.db.user.findMany ()
    }),
    createGame: publicProcedure.input (z.object ({
        userId: z.string (),
        solution: z.string (),
        tryNumber: z.number (),
        status: z.string ()

    })).mutation (async ({ctx, input})=> {
        return await ctx.db.game.create ({
            data:{
                solution: input.solution,
                tryNumber: input.tryNumber,
                status: input.status,
                user: {
                    connect :{
                        id: input.userId
                    }
                }
            }
        })
    }),
    getAllGames: publicProcedure.input (z.object (
        {
            userId: z.string ()
        }
    )).query (async ({ctx, input})=> {
            return await ctx.db.game.findMany ({
                where: {
                    userId: input.userId
                }
            })
    }),
    sendInvite: publicProcedure.input (z.object ({
        userId:z.string (),
        senderId:z.string (),
        solution: z.string (),
        senderName: z.string ()
    })).mutation (async ({ctx, input})=>{
        return await ctx.db.gameIvite.create ({
            data:{
                senderId: input.senderId,
                solution: input.solution,
                senderName: input.senderName,
                owner:{
                    connect:{
                        id: input.userId
                    }
                }
            }
        })
    }),
    getInvites: publicProcedure.input (z.object ({
        id: z.string ()
    })).query (async ({ctx, input})=> {
        return await ctx.db.gameIvite.findMany ({
            where:{
                ownerId: input.id
            }
        })
    })

})

export default gameRouter