import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notion",
  description: "A workspace for better and faster work.",
  icons:[
    {
    media:"(prefers-color-scheme:light)",
    url:"/notion-logo.svg",
    href:'/notion-logo.svg'
  },
  {
    media:"(prefers-color-scheme:dark)",
    url:"/notion-logo-dark.svg",
    href:'/notion-logo-dark.svg'
  }
]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>

      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey = "Notion-theme"
            >
            {children}
          </ThemeProvider>
            </ConvexClientProvider>
      </body>
    </html>
  );
}
