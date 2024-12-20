import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local"
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: "Desing UX/UI Portfolio Millandev",
  description: siteConfig.bio,
};

const sfPRO = localFont ({
  src: [
    {
      path: "./fonts/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={sfPRO.className}
      >
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange //posible cosa para borrar
          >
          <div className="flex flex-col h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
