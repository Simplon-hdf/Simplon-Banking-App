export interface IConfig {
    port: string
}

export interface IUser {
    username: string,
    lastname: string,
    phone_number: string,
    role: string
}

export interface IAccount {
    id: number,
    balance: number,
    user_id: number
}

export interface ITransaction {
    amount: number,
    is_validate: boolean,
    sender_id:   number,  
    receiver_id: number
}
