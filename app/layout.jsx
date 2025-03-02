//every reusable component that will be seen across all pages will be found here

import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Flynt Library",
  description: "WEB  development and courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
