import Router from "koa-router";

import { createAccountController} from "../controllers/account";
import { findManyAccountController} from "../controllers/account";
import { findUniqueAccountController} from "../controllers/account";
import { updateAccountController} from "../controllers/account";
import { deleteAccountController} from "../controllers/account";

const router = new Router();

router.post( "account", "/account/add", async ( ctx: Router.IRouterContext ) => {
  ctx.body = await createAccountController( ctx.request.body )
});

router.get( "account", "/account/:id?/", async ( ctx: Router.IRouterContext ) => {
ctx.body = await findManyAccountController(+ctx.params.id)
});

router.get( "account", "/account/:id/", async ( ctx: Router.IRouterContext ) => {
  ctx.body = await findUniqueAccountController(+ctx.params.id)
  });

router.patch( "account", "/account/update/:id", async ( ctx: Router.IRouterContext ) => {
ctx.body = await updateAccountController(+ctx.params.id, ctx.request.body)
});

router.delete( "account", "/account/delete/:id", async ( ctx: Router.IRouterContext ) => {
  ctx.body = await deleteAccountController(+ctx.params.id)
  });
  
export default router