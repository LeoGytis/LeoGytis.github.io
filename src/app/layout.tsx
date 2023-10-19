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
  // openGraph: {
  //   title: titlePage,
  //   description: descriptionPage,
  //   images: [
  //     {
  //       url: image.src,
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
