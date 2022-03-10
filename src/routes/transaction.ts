import Router from "koa-router";

import { createCrontroller, findManyController, findUniqueController } from '../controllers/transaction';


const router = new Router();

router.post( '/transaction/new', async ( ctx: Router.IRouterContext ) => {
    ctx.body = await createCrontroller( ctx.request.body );
});

router.get( '/transaction/history', async ( ctx: Router.IRouterContext ) => {
    ctx.body = await findManyController();
});

router.get( '/transaction/:id', async ( ctx: Router.IRouterContext ) => {
    ctx.body = await findUniqueController( +ctx.params.id );
});


export default router;