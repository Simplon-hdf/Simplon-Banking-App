import { PrismaClient } from "@prisma/client";
import Router from "koa-router";
import createUser from "../models/user/create";
import { findMany } from "../models/user/read";


const router = new Router();

const prisma = new PrismaClient();

export interface IUser {
    username: string,
    lastname: string,
    phone_number: string,
    role: string
}

// monsite.fr/user/get

router.post( "home", "/user/add", async ( ctx: Router.IRouterContext ) => {
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

router.get( "home", "/user", async ( ctx: Router.IRouterContext ) => {
    ctx.body = "a new User";
    ctx.body = await findMany()
    .catch( ( e: Error ) => {
        throw e;
    })
    .finally( async () => {
        console.log( ctx.body );
        await prisma.$disconnect;
    });
});

export default router;