import { PrismaClient } from "@prisma/client";
import { IUser } from "../../routes/user"
const prisma = new PrismaClient();

const create = async ( data: IUser ) => {
    await prisma.user.create({
       data
    });
    return await create;
}

export default create;
