import "server-only";
import { prisma } from "../app/api/base";
// import auth from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorised");
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
