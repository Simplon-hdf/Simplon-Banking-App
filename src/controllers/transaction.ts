import { PrismaClient } from "@prisma/client";

import { ITransaction } from '../interface'
import { create } from "../services/transaction";

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
