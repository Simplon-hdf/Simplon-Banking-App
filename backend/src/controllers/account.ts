import { PrismaClient } from "@prisma/client";
import { IAccount } from "../interface";
import { create } from "../services/account";
import { findMany } from "../services/account";
import { findUnique } from "../services/account";
import { update } from "../services/account";
import { deleteA } from "../services/account";


const prisma = new PrismaClient();


export const createAccountController = async (data : IAccount) => {
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


export const findManyAccountController = async (id :number) => {
  await findMany(id)
  try {
      return findMany(id)
  }
  catch(err) {    
  }
  finally{
    prisma.$disconnect;
  };
}

export const findUniqueAccountController = async (id :number) => {
  await findUnique(id)
  try {
      return findUnique(id)
  }
  catch(err) {    
  }
  finally{
    prisma.$disconnect;
  };
}

export const updateAccountController = async (id :number, data : IAccount) => {
  await update(id, data)
  
  try {
      if (!data.receiver) {
        return `le compte ${id} a ete  ${data.balance < 0 ? "debite" : "credite"} de ${Math.abs(data.balance)}`
      }
      else if (data.receiver) {
        return  `le compte ${id} a ete  ${data.balance < 0 ? "debite" : "credite"} de ${Math.abs(data.balance)} au profit de ${data.receiver}`
      }
  } 
  catch(err) {    
  }
  finally{
    prisma.$disconnect;
  };
}

export const deleteAccountController = async (id :number) => {
  await deleteA(id)
  try {
      return `le compte ${id} a bien ete effacer`
  }
  catch(err) {    
  }
  finally{
    prisma.$disconnect;
  };
}