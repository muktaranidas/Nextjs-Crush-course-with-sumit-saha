import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <nav  >
          <ul className="flex">
            <li className="mr-8"><Link href="/about">About</Link></li>
            <li className="mr-8"><Link href="/about/blogs">Blogs</Link></li>
            <li className="mr-8"><Link href="/">Home</Link></li>
            <li className="mr-8"><Link href="/posts ">Posts</Link></li>
          </ul>
        </nav>
        <hr></hr>
        {children}
       
        </body>
    </html>
  );
}
