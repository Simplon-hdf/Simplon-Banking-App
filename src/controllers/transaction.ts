import { PrismaClient } from "@prisma/client";

import { ITransaction } from '../interface'
import { create, findMany, findUnique, update } from "../services/transaction";

const prisma = new PrismaClient();

export const createCrontroller = async ( data: ITransaction ) => {
    let requestIsOk = false;
    try {
        await create( data )
        .then(() => {
            requestIsOk = true;
        });
    }
    catch( err ) {    
        throw err;
    }
    finally{
        prisma.$disconnect;
        if ( requestIsOk ) {
            return 'Nouvelle transaction crée';
        }
        return 'Une erreur est survenue';
    };
};


export const findManyController = async () => {
    let requestIsOk = false;
    try {
        return await findMany();
    }
    catch(err) {
        throw err;    
    }
    finally{
        prisma.$disconnect;
    };
};

export const findUniqueController = async ( id:number ) => {
    try {
        return await findUnique( id );
    }
    catch(err) {
        throw err;    
    }
    finally{
        prisma.$disconnect;
    };
};

export const updateController = async ( id:number, data: ITransaction ) => {
    let requestIsOk = false;
    try {
        await update( id, data )
        .then(() => {
            requestIsOk = true;
        });
    }
    catch(err) {
        throw err;    
    }
    finally{
        prisma.$disconnect;
        if ( requestIsOk ) {
            return 'Transaction mise à jour';
        }
        return 'Une erreur est survenue';
    };
};