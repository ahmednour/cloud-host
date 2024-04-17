import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
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
        <main className="container m-auto py-4">{children}</main>
      </body>
    </html>
  );
}
