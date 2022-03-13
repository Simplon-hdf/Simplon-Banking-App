import { PrismaClient } from "@prisma/client";
import { IAccount } from "../interface";
import { create, findMany, findUnique, update, deleteAccount } from "../services/account";
import type Router from "koa-router";

const prisma = new PrismaClient();

export const createController = async ( data: IAccount ) => {
    let requestIsOk: boolean = false;
    try {
        await create( data )
        .then(() => {
            requestIsOk = true;
        });
    }
    catch( err ) {
        throw err;
    }
    finally {
        prisma.$disconnect;
        if ( requestIsOk ) {
            return 'Nouveau compte créé!';
        }
        return 'Une erreur est survenue!';
    }
}

export const findManyController = async ( id?: number ) => {
    try {
        return await findMany( id );
    }
    catch( err ) {
        console.error( err );
    }
    finally {
        prisma.$disconnect;
    } 
}

export const findUniqueController = async ( id: number ) => {
    try {
        return await findUnique( id );
    }
    catch( err ) {
        console.error( err );
    }
    finally {
        prisma.$disconnect;
    }
}

export const updateController = async ( id:number, data: IAccount ) => {
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
            return 'Compte mis à jour';
        }
        return 'Une erreur est survenue';
    };
};

export const deleteController = async ( id: number ) => {
    let requestIsOk = false;
    try {
        await deleteAccount( id )
        .then(() => {
            requestIsOk = true;
        });
    }
    catch( err ) {
        throw err;
    }
    finally {
        prisma.$disconnect;
        if ( requestIsOk ) {
            return 'Compte supprimé';
        }
        return 'Une erreur est survenue';
    }
};