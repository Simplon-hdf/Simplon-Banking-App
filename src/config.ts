interface IConfig {
    port: string
}

const config: IConfig = {
    port: process.env.PORT || "3000"
};

export default config;