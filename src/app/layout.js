import { Inter } from "next/font/google";
import "./globals.css";
import APIProvider from "@/context/apiContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wather App",
  description: "A weather application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <APIProvider>{children}</APIProvider>
      </body>
    </html>
  );
}
