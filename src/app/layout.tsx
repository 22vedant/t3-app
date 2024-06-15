import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "~/_components/page";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font--poppins",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          <TopBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
