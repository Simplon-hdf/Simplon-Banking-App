import Router from "koa-router";

import { createUserController } from "../controllers/user";
import { findManyUserController } from "../controllers/user";
import { findUniqueUserController } from "../controllers/user";
import { updateUserController } from "../controllers/user";
import { deleteUserController } from "../controllers/user";


const router = new Router();

router.post( "home", "/user/add", async ( ctx: Router.IRouterContext ) => {
  ctx.body = await createUserController( ctx.request.body )
});

router.get( "home", "/user", async ( ctx: Router.IRouterContext ) => {
  ctx.body = await findManyUserController()
});

router.get( "home", "/user/:id", async ( ctx: Router.IRouterContext ) => {
  ctx.body = await findUniqueUserController(+ctx.params.id)
});

router.patch( "home", "/user/update/:id", async (ctx: Router.IRouterContext ) => {
  ctx.body = await updateUserController(+ctx.params.id, ctx.request.body)
});

router.delete( "home", "/user/delete/:id", async (ctx: Router.IRouterContext ) => {
  ctx.body = await deleteUserController(+ctx.params.id)
});
export default router;