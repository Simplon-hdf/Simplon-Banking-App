import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import cors from "koa2-cors";
import serve from "koa-static";
import views from "koa-views";

import { type Server } from "http";

import config from "./config";

import healthCheckRoute from "./routes/healthcheck";
import createUserRoute from "./routes/user";
import transactionRoute from "./routes/transaction";

const app = new Koa();
const PORT: string = config.port;

app
  .use( serve( __dirname + '/static' ) )
  .use( views( __dirname + '/views', {
    extension: 'pug',
    map: {
      pug: 'pug'
    }
  }));

app
  .use( bodyParser() )
  .use(
    cors({
        origin: "*"
    })
  )
  .use( logger() )
  .use( createUserRoute.routes() )
  .use( transactionRoute.routes() )
  .use( healthCheckRoute.routes() )

const server: Server = app
  .listen( PORT, async () => {
    console.log(`Server listening on PORT : ${PORT}`);
  })
  .on( "error", (e: Error) => {
    console.log( e );
  });