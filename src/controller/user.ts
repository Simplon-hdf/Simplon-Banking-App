import create from "../service/user/create";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUserConstroller = async (data) => {
    await create(data)

    try {
       return 'ajout effectuer'
    }
    catch(err) {
        
    }
    finally{
         prisma.$disconnect;
    };
}
