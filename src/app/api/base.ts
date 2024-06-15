import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient({
  datasourceUrl: process.env.POSTGRES_URL,
});
