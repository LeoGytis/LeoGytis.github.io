import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu, Roboto, Nunito, Inter } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gytis Leonavicius",
  description: "Gytis Leonavicius portfolio page",
  openGraph: {
    images: "/images/website_image.png",
  },
  // openGraph: {
  //   images: [
  //     {
  //       url: "https://nextjs.org/og.png",
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: "https://nextjs.org/og-alt.png",
  //       width: 1800,
  //       height: 1600,
  //       alt: "My custom alt",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
