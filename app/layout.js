import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduNova - Learn. Level Up. Lead",
  description: "Modern SaaS Learning Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
