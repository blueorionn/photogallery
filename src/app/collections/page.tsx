import type { Metadata } from "next";
import Header from "@/components/Header/Header";
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
      <main className="w-full">
        <Header />
        <section className="w-full max-w-screen-2xl mx-auto px-6 py-6 lg:py-12 xl:py-16">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold xl:font-bold text-gray-400">
              Discover Collections
            </h1>
          </div>
          <section
            className="w-full py-8 lg:py-12 xl:py-16"
            aria-label="collection-grid"
          >
            <Collections />
          </section>
        </section>
      </main>
    </>
  );
}
