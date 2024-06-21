import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "~/_components/page";
import { Poppins } from "@next/font/google";
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`font-sans ${poppins.variable} dark`}>
        <body>
          <div>
            <TopBar />
            <main className="">{children}</main>
          </div>
          {modal}
          <div id="modal-root"></div>
        </body>
      </html>
    </ClerkProvider>
  );
}
