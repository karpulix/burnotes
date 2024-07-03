import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <NextIntlClientProvider messages={messages}>
        <body
          suppressHydrationWarning={true}
          className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="max-w-2xl mx-auto py-10 px-4">
              <Header />
              <main>{children}</main>
            </div>
            {/* <Analytics /> */}
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}