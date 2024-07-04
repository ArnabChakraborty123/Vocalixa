import { Inter } from "next/font/google";
import "./globals.css";
import navbar from "./components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vocalixa",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <navbar />
        {children}
      </body>
    </html>
  );
}
