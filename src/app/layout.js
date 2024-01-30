import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/app/components/BootstrapClient";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "LamprosLabs",
  description:
    "Driving Mainstream Adoption, Empowering Developers,and Cultivating the Future of Web3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
