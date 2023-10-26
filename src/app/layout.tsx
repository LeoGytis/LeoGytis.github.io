import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu, Roboto, Nunito, Inter } from "next/font/google";
import website_image from "../../public/images/website_image.png";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gytis Leonavicius | Web Developer",
  description: "Inclusive products and digital experiences for the web.",
  openGraph: {
    title: "!!Gytis Leonavicius | Web Developer",
    description: "Inclusive products and digital experiences for the web.",
    images: [
      {
        url: website_image.src,
      },
    ],
  },
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
