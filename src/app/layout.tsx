import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import website_image from "../../public/images/website_image.png";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

// const previousImages = (await parent).openGraph?.images || [];

export const metadata: Metadata = {
  metadataBase: new URL("https://leogytis.github.io/"),
  title: "Gytis Leonavicius | Web Developer",
  description: "Inclusive products and digital experiences for the web.",
  openGraph: {
    title: "Gytis Leonavicius | Web Developer",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
