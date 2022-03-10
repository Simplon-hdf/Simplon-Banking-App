
import { PrismaClient } from "@prisma/client";
import {IUser } from '../interface'
import { create } from "../services/user";
import { findMany } from "../services/user";
import { findUnique } from "../services/user";
import { update } from "../services/user";
import { deleteU } from "../services/user";

const prisma = new PrismaClient();

export const createUserController = async (data : IUser) => {
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

export const findManyUserController = async () => {
  await findMany()
  try {
     return findMany()
  }
  catch(err) {    
  }
  finally{
       prisma.$disconnect;
  };
}

export const findUniqueUserController = async (id : Number) => {
  await findUnique(+id)
  try {
      if(await findUnique(+id) ) {
        return findUnique(+id)
      }
      else  return 'aucun resultat trouver'
  }
  catch(err) {    
  }
  finally{
       prisma.$disconnect;
  };
}

export const updateUserController = async (id:number, data : IUser) => {
  await update(id, data)
  try {
      return 'mise a jour effectuer'
  }
  catch(err) {    
  }
  finally{
        prisma.$disconnect;
  };
}

export const deleteUserController = async (id:number) => {
  await deleteU(id)
  try {
      return 'supression effectuer'
  }
  catch(err) {    
  }
  finally{
        prisma.$disconnect;
  };
}
