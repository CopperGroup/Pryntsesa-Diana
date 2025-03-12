import AdminSidebar from "@/components/shared/AdminSidebar"
import Provider from "../Provider";
import { Inter } from "next/font/google";
import "../globals.css";
import MobileAdminSidebar from "@/components/shared/MobileAdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { Toaster as ToasterOld} from "@/components/ui/toaster";
import { Toaster } from "sonner";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Provider>
         
      <main className="flex flex-row ">
        <AdminSidebar/>
        <section className="overflow-x-hidden w-full">
          <div className="w-full h-full">
            {children}
          </div>
        </section>
        <MobileAdminSidebar/>
        <ToasterOld />
        <Toaster position="bottom-right" richColors />
      </main>
      </Provider>
    </body>
  </html>
  )
}
