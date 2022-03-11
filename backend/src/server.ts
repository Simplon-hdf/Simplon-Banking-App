import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import cors from "koa2-cors";

import { type Server } from "http";

import config from "./config";
import healthCheckRoute from "./routes/healthcheck";
import UserRoute from "./routes/user";
import AccountRoute from './routes/account'

const app = new Koa();
const PORT: string = config.port;

app
  .use( bodyParser() )
  .use(
    cors({
        origin: "*"
    })
)
  .use( logger() )
<<<<<<< HEAD:src/server.ts
  .use( createUserRoute.routes() )
  .use( healthCheckRoute.routes() )

const server: Server = 
app
=======
  .use( UserRoute.routes())
  .use(AccountRoute.routes())
  .use( healthCheckRoute.routes() )

const server: Server = app
>>>>>>> 8e60434b0d74881d601e974481d815540afc12a1:backend/src/server.ts
  .listen( PORT, async () => {
    console.log(`Server listening on PORT : ${PORT}`);
  })
  .on( "error", (e: Error) => {
    console.log( e );
  });