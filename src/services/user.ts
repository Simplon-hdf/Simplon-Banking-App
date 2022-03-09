import { PrismaClient } from "@prisma/client";
import { InterfaceUser } from "../interface";
const prisma = new PrismaClient();

export const create = async ( data: InterfaceUser ) => {
    await prisma.user.create({
       data
    });
    return await create;
}

export const findMany = async () => {
    const allUsers = await prisma.user.findMany();
    return await allUsers;
};

export const findUnique = async (id: number) => {
  const uniqueUsers = await prisma.user.findUnique( {
    where : {
        id
    }
  });
  return await uniqueUsers;
};

export const update = async (id : number, data: InterfaceUser) => {
  const update = await prisma.user.update({
    data,
    where : {
        id
    }
  });
  return await update;
}

export const deleteU = async (id : number) => {
  const update = await prisma.user.delete({
    where : {
        id
    }
  });
  return await deleteU;
}