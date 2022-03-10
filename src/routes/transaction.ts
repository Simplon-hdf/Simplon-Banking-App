import Router from "koa-router";

import { createCrontroller, findManyController, findUniqueController, updateController } from '../controllers/transaction';
import { ITransaction } from "../interface";


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

router.patch( '/transaction/update/:id', async ( ctx: Router.IRouterContext ) => {
    const id: number = +ctx.params.id;
    const data: ITransaction = ctx.request.body;
    ctx.body = await updateController( id, data );
} )

export default router;