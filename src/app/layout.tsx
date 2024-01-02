import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import db from "@/lib/supabase/db";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Notion",
  description: "A note taking app",
};

console.log(db);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
