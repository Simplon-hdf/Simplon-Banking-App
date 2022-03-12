import Router from "koa-router";

import { createCrontroller, findManyController, findUniqueController, updateController, deleteController } from '../controllers/transaction';
import { ITransaction } from "../interface";


const router = new Router();

router.post( '/transaction/new', async ( ctx: Router.IRouterContext ) => {
    ctx.body = await createCrontroller( ctx.request.body );
});

router.get( '/transaction/history', async ( ctx: Router.IRouterContext ) => {
    ctx.body = await findManyController();
    const data = ctx.body;
    ctx.state = {
        title: 'transaction history'
    };
    await ctx.render( 'history', {
        data
    });
});

router.get( '/transaction/:id', async ( ctx ) => {
    ctx.body = await findUniqueController( +ctx.params.id );
    const data = ctx.body[0];
    ctx.state = {
        title: 'transaction'
    };
    await ctx.render( 'transacDetail', {
        amount: data.amount,
        sender: data.sender_id,
        receiver: data.receiver_id,
        date: data.date
    });
});

router.patch( '/transaction/update/:id', async ( ctx: Router.IRouterContext ) => {
    const id: number = +ctx.params.id;
    const data: ITransaction = ctx.request.body;
    ctx.body = await updateController( id, data );
});

router.delete('/transaction/delete/:id', async ( ctx: Router.IRouterContext ) => {
    const id: number = +ctx.params.id;
    ctx.body = await deleteController( id );
})

export default router;