"use client";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { Poppins } from "@next/font/google";
import { useRouter } from "next/navigation";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font--poppins",
  weight: "400",
});
export default function TopBar() {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between bg-black p-4 font-mono text-white">
      <div>Gallery</div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => {
          router.refresh();
        }}
      />
      <div className="flex items-center ">
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
}
