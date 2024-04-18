import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });
const kufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"] });
export const metadata = {
  title: "Cloud Hosting",
  description: "Cloud Hosting Project by Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastContainer theme="colored" position="top-center" />
        <main className="container m-auto px-5 pt-8 w-full md:w-3/4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
