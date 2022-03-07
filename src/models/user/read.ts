import Router from "koa-router";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findMany = async () => {
    const allUsers = await prisma.user.findMany();
    return allUsers;
};
