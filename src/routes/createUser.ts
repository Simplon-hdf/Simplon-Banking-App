import { PrismaClient } from "@prisma/client";
import Router from "koa-router";
import createUser from "../models/user/create";


const router = new Router();

const prisma = new PrismaClient();

export interface IUser {
    username: string,
    lastname: string,
    phone_number: string,
    role: string
}


router.post( "home", "/user", async ( ctx: Router.IRouterContext ) => {
    ctx.body = 'Create a new User';
    createUser( ctx.request.body )
    .catch( ( e: Error ) => {
        throw e;
    })
    .finally( async () => {
        console.log( ctx.request.body, " Finally");
        await prisma.$disconnect;
    });
});

export default router;