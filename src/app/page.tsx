import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  datasourceUrl: process.env.POSTGRES_URL,
});
// const mockUrls = [
//   "https://utfs.io/f/81df7f48-bd19-4178-9d0c-7bd1cbf95842-v38upg.jpg",
//   "https://utfs.io/f/308826f3-61c3-4ff1-bef6-196ec7146490-nq3rk1.jpg",
//   "https://utfs.io/f/30faf0c5-d932-4091-b61d-88ef0feb34cd-ek7519.jpg",
//   "https://utfs.io/f/83d87302-2b00-4ca3-b66f-b5d23dd16eb2-f6jgo6.jpg",
//   "https://utfs.io/f/fe9fc69f-0545-45ca-af23-0d38acc209a2-v38unu.jpg",
// ];

// const mockPosts = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url: url,
// }));

export default async function HomePage() {
  const images = await prisma.image.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      <div className="flex flex-wrap">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id} className=" w-48 gap-3 p-2">
            <img src={image.url} alt="" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
