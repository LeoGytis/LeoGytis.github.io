import type { Metadata } from "next";
import "./globals.css";
// import {Nunito, Inter, Lato, Quicksand} from "next/font/google";
import { Quicksand } from "next/font/google";
import website_image from "../../public/images/website_image.png";

const font = Quicksand({
  //   weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leogytis.github.io/"),
  title: "Gytis | Web Developer",
  description: "Inclusive products and digital experiences for the web.",
  authors: [{ name: "Gytis Leonavicius", url: "https://leogytis.github.io/" }],
  openGraph: {
    title: "Gytis | Web Developer",
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
      <body className={font.className}>{children}</body>
    </html>
  );
}
