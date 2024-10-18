import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserByClerkId(userId: string) {
  return await prisma.seguridad_personal.findUnique({
    where: { id_usuario: userId },
  });
}
