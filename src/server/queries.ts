import "server-only";
import { prisma } from "../app/api/base";
// import auth from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();

  // if (!user.userId) throw new Error("Unauthorised");
  const images = await prisma.image.findMany({
    where: {
      userId: user.userId,
    },
    orderBy: {
      id: "desc",
    },
  });

  return images;
}

export async function getImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorised");

  const images = await prisma.image.findFirst({
    where: {
      id,
    },
  });

  if (!images) throw new Error("Image not found");

  if (images.userId !== user.userId) throw new Error("User is not authorised");

  return images;
}
