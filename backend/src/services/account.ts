import { PrismaClient } from "@prisma/client";
import { IAccount } from "../interface";
const prisma = new PrismaClient();

export const create = async ( data: any ) => {
    let max = 9999999999999999999
    let min = 1000000000000000000
    let id =  Math.floor(Math.random() * (max - min + 1)) + min;

    const createA = await prisma.account.create({
       data : {
           ...data,
           id
       }
       
    });
    return await createA;
}

export const findMany = async ( id : number) => {
  console.log(id)
 const findAllAccount = await prisma.account.findMany({
    where : {
      user_id : id
    },
    include: {
     users : {
       select: {
         username: true,
         lastname: true
       }
     }
    }
  });
  return await findAllAccount;
}

export const findUnique = async ( id : number) => {
  const findUniqueAccount = await prisma.account.findMany({
    where : {
      id
    }
  });
  return await findUniqueAccount;
}


export const deleteA = async ( id : number) => {
  const deleteaccount = await prisma.account.delete({
    where : {
      id
    }
  });
  return await deleteaccount;
}

export const update = async ( id : number, data: IAccount ) => {
  const {receiver, balance} = data
  const updateOwnAccount =  await prisma.account.update({
    data : {
      balance : {
        increment :balance
      }
    }, 
    where : {
      id
    }
  })
  if (!receiver) {
    return await updateOwnAccount;
  }

  else if (receiver) {
    const updateotherAccount =  await prisma.account.update({
      data : {
        balance : {
          increment : balance * -1
        }
      }, 
      where : {
        id : receiver
      }
    })
    return {
      updateOwnAccount,
      updateotherAccount
    }
  }
}