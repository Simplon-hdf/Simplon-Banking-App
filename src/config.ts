import { IConfig } from "./interface";

const config: IConfig = {
    port: process.env.PORT || "3000"
};

export default config;