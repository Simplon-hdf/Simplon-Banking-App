import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import cors from "koa2-cors";
import serve from "koa-static";
import views from "koa-views";

import { type Server } from "http";

import config from "./config";

import accountRoutes from "./routes/account";
import healthCheckRoutes from "./routes/healthcheck";
import userRoutes from "./routes/user";
import transactionRoutes from "./routes/transaction";

const app = new Koa();
const PORT: string = config.port;

// For Templating Engine
app
  .use( serve( __dirname + '/static' ) )
  .use( views( __dirname + '/views', {
    extension: 'pug',
    map: {
      pug: 'pug'
    }
  }));

// All Requests
app
  .use( bodyParser() )
  .use(
    cors({
        origin: "*"
    })
  )
  .use( logger() )
  .use( accountRoutes.routes() )
  .use( userRoutes.routes() )
  .use( transactionRoutes.routes() )
  .use( healthCheckRoutes.routes() );

// Create And Launch a new Server
const server: Server = app
  .listen( PORT, async () => {
    console.log(`Server listening on PORT : ${PORT}`);
  })
  .on( "error", (e: Error) => {
    console.log( e );
  });