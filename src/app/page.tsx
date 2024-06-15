import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Poppins } from "@next/font/google";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font--poppins",
  weight: "400",
});

import { PrismaClient } from "@prisma/client";
import { getMyImages } from "~/server/queries";
const prisma = new PrismaClient({
  datasourceUrl: process.env.POSTGRES_URL,
});

async function Images() {
  const images = await getMyImages();
  return (
    <div className={`flex flex-wrap ${poppins.variable} gap-3 font-sans`}>
      {images.map((image) => (
        <div key={image.id} className=" w-48 p-2">
          {/* <img src={image.url} alt="" /> */}
          <Image
            src={image.url}
            alt={image.name}
            // style={{ objectFit: "contain" }}
            // fill
            width={480}
            height={480}
          />
          {/* <Image src={image.url} alt={"image"} width={} height={} /> */}
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  const images = await getMyImages();
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
