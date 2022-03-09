import { PrismaClient } from "@prisma/client";
import Router from "koa-router";
import {createUserConstroller} from '../controller/user'


const router = new Router();



export interface IUser {
    username: string,
    lastname: string,
    phone_number: string,
    role: string
}

router.post( "home", "/user/add", async ( ctx: Router.IRouterContext ) => {
  ctx.body = await createUserConstroller(ctx.request.body)
});

router.get( "home", "/user", async ( ctx: Router.IRouterContext ) => {
   
});

export default router;