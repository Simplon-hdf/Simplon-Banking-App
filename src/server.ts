import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import cors from "koa2-cors";

import { type Server } from "http";

import config from "./config";
import healthCheckRoute from "./routes/healthcheck";

const app = new Koa();

const PORT: string = config.port;

app.use( bodyParser() );
app.use(
    cors({
        origin: "*"
    })
);
app.use( logger() );

app.use( healthCheckRoute.routes() );

const server: Server = app
.listen( PORT, async () => {
    console.log(`Server listening on PORT : ${PORT}`);
})
.on( "error", (e: Error) => {
    console.log( e );
});