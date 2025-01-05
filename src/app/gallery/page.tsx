import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import FeaturedGallery from "@/components/Gallery/FeaturedGallery";

export const metadata: Metadata = {
  title: "Gallery | Photogallery",
  description: "Collection of curated photos",
  openGraph: {
    title: "Gallery | Photogallery",
    description: "Collection of curated photos",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
  },
  twitter: {
    card: "summary",
    title: "Gallery | Photogallery",
    description: "Collection of curated photos",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
  },
};

export default async function Page() {
  return (
    <>
      <main className="w-full">
        <Header />
        <section className="w-full max-w-screen-2xl mx-auto px-6 py-6 lg:py-12 xl:py-16">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-lg lg:text-xl xl:text-2xl font-semibold xl:font-bold text-gray-600 dark:text-gray-400">
              Browse Photos
            </h1>
          </div>
          <section
            className="w-full py-8 lg:py-12 xl:py-16"
            aria-label="collection-grid"
          >
            <FeaturedGallery />
          </section>
        </section>
      </main>
    </>
  );
}
