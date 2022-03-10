import Router from "koa-router";
import { createCrontroller } from '../controllers/transaction'

import { ITransaction } from "../interface";

const router = new Router();

router.post( '/transaction', async ( ctx: Router.IRouterContext ) => {
    ctx.body = await createCrontroller( ctx.request.body );
});

export default router;