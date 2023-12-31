import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediGadgetBD",
  description:
    "MediGadget BD is an online Medical equipment shop in Bangladesh.Any kinds of Medical Equipment we can provide with a reasonable price.MediGadget BD always maintain their customer satisfaction fist.#medicalequipmentsupplier #medicalgadget #medigadgetBD #Bionime #Glucosetestmeter #digitalbloodpressuremeter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
