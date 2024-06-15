import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font--poppins",
  weight: "400",
});
export default function TopBar() {
  return (
    <div className="flex w-full justify-between bg-black p-4 font-mono text-white">
      <div>Gallery</div>
      <div className="hover:underline">
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
