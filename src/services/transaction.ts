import { PrismaClient } from "@prisma/client";
import  { ITransaction } from "../interface";

const prisma = new PrismaClient();

export const create = async ( data: ITransaction ) => {
    return await prisma.transaction
    .create({
       data
    });
}

export const findMany = async () => {
    return await prisma.transaction.findMany();
}

export const findUnique = async ( id: number ) => {
    return await prisma.transaction
    .findMany({
        where: {
            id
        }
    });
}

export const update = async ( id: number, data: ITransaction ) => { 
    return await prisma.transaction
    .update({
        where: {
            id
        },
        data
    });
}

export const deleteTransac = async ( id: number ) => {
    return await prisma.transaction
    .delete({
        where: {
            id
        }
    });
};