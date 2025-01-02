import type { Metadata } from "next";
import Collections from "./Collections";

export const metadata: Metadata = {
  title: "Collections | Photogallery",
  description: "This page is a collection of multiple similar photos.",
  openGraph: {
    title: "Collections | Photogallery",
    description: "This page is a collection of multiple similar photos.",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
  },
  twitter: {
    card: "summary",
    title: "Collections | Photogallery",
    description: "This page is a collection of multiple similar photos.",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
  },
};

export default function Page() {
  return (
    <>
      <Collections />
    </>
  );
}
