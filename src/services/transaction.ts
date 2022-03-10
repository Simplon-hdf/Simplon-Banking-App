import { PrismaClient } from "@prisma/client";
import  { ITransaction } from "../interface";

const prisma = new PrismaClient();

export const create = async ( data: ITransaction ) => {
    console.log( data );
    await prisma.transaction.create({
       data
    });
    return await create;
}
