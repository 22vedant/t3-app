import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font--poppins",
  weight: "400",
});

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  datasourceUrl: process.env.POSTGRES_URL,
});

async function Images() {
  const images = await prisma.image.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return (
    <div className={`flex flex-wrap ${poppins.variable} font-sans`}>
      {images.map((image) => (
        <div key={image.id} className=" w-48 gap-3 p-2">
          <img src={image.url} alt="" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <div>
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
}
