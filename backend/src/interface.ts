export interface IConfig {
    port: string
}

export  interface IUser {
    username: string,
    lastname: string,
    phone_number: string,
    role: string
    update_at?: any
}

export interface IAccount {
    id: number,
    balance : number,
    user_id : never,
    sender? :number,
    receiver?: number,
}