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
    const allTansactions = await prisma.transaction.findMany();
    return await allTansactions;
}

export const findUnique = async ( id: number ) => {
    const allTansactions = await prisma.transaction
    .findMany({
        where: {
            id
        }
    });
    return await allTansactions;
}