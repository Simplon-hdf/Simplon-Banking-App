import Router, { IRouterContext } from "koa-router";
import { createController, findManyController, findUniqueController, updateController, deleteController } from "../controllers/account";
import { IAccount } from "../interface";

const router = new Router();

router.post( '/account/new', async ( ctx: IRouterContext ) => {
    ctx.body = await createController( ctx.request.body );
});

router.get( '/account/list/:user_id', async ( ctx: IRouterContext ) => {
    const id = +ctx.params.user_id;
    ctx.body = await findManyController( id );
});

router.get( '/account/:id', async ( ctx: IRouterContext ) => {
    const id: number = +ctx.params.id;
    ctx.body = await findUniqueController( id );
});

router.patch( '/account/update/:id', async ( ctx: IRouterContext ) => {
    const id: number = +ctx.params.id;
    const data: IAccount = ctx.request.body;
    ctx.body = await updateController( id, data );
});

router.delete( '/account/delete/:id', async ( ctx: IRouterContext ) => {
    const id: number = +ctx.params.id;
    ctx.body = deleteController( id );
});

export default router;