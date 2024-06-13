import "~/styles/globals.css";

function TopBar() {
  return (
    <div className="flex w-full justify-between bg-black p-4 font-mono text-white">
      <div>Gallery</div>
      <div>Signin</div>
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
