import { PrismaClient } from "@prisma/client";
import { IUser } from "../interface";
const prisma = new PrismaClient();

export const create = async ( data: IUser ) => {
    await prisma.user.create({
       data
    });
    return await create;
}

export const findMany = async () => {
    const allU = await prisma.user.findMany();
    return await allU;
};

export const findUnique = async (id: number) => {
  const uniqueU = await prisma.user.findUnique( {
    where : {
        id
    }
  });
  return await uniqueU;
};

export const update = async (id : number, data: IUser) => {
  const updateU = await prisma.user.update({
    data ,
    where : {
        id
    }
  });
  return await updateU;
}

export const deleteU = async (id : number) => {
  const deleteU = await prisma.user.delete({
    where : {
        id
    }
  });
  return await deleteU;
}