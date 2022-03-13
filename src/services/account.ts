import { PrismaClient } from "@prisma/client";
import { IAccount } from "../interface";

const prisma = new PrismaClient();

export const create = async ( data: IAccount ) => {
    return await prisma.account
    .create({
        data
    });
}

export const findMany = async ( id?: number ) => {
    if ( typeof id !== undefined ) {
        return await prisma.account
        .findMany({
            where: {
                user_id: id
            }
        });
    }
}

export const findUnique = async ( id: number ) => {
    return await prisma.account.findUnique({
        where: {
            id
        }
    });
}

export const update = async ( id: number, data: IAccount ) => {
    return await prisma.account
    .update({
        where: {
            id
        },
        data
    });
}

export const deleteAccount = async ( id: number ) => {
    return await prisma.account
    .delete({
        where: {
            id
        }
    });
}