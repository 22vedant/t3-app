import "~/styles/globals.css";
import Link from "next/link";
function TopBar() {
  return (
    <div className="flex w-full justify-between bg-black p-4 font-mono text-white">
      <div>Gallery</div>
      <div className="hover:underline">
        <Link href={"/signin"}>Signin</Link>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
