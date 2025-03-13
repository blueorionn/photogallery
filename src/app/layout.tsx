import type { Metadata } from "next";
import ThemeProvider from "@/provider/ThemProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Photogallery | Hobby Project",
  description:
    "This website is a casual portfolio project created to explore and display the beauty of photography. All the photos and videos showcased here are fetched using the Pexels API, a platform that provides high-quality and free-to-use images and videos from talented photographers around the world.",
  openGraph: {
    title: "Photogallery | Hobby Project",
    description:
      "This website is a casual portfolio project created to explore and display the beauty of photography. All the photos and videos showcased here are fetched using the Pexels API, a platform that provides high-quality and free-to-use images and videos from talented photographers around the world.",
    url: "https://photogallery.functionbasket.com/",
    images:
      "https://photogallery.functionbasket.com/img/photogallery-site-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photogallery | Hobby Project",
    description:
      "This website is a casual portfolio project created to explore and display the beauty of photography. All the photos and videos showcased here are fetched using the Pexels API, a platform that provides high-quality and free-to-use images and videos from talented photographers around the world.",
    site: "@SS_Swadhinn",
    images:
      "https://photogallery.functionbasket.com/img/photogallery-site-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>{children}</ThemeProvider>
    </html>
  );
}
