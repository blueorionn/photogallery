import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { photoCollections } from "@/data/collections";
import Header from "@/components/Header/Header";

// dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  // If collection id not in photo collection
  const collectionId = (await params).id;
  if (!Object.values(photoCollections).includes(collectionId)) {
    return notFound();
  }

  // getting page title
  const collections = photoCollections as Record<string, string>;
  const collectionName = Object.keys(collections)
    .filter((cl) => {
      if (collections[cl] == collectionId) return cl;
    })
    .toString();

  // returning metadata
  return {
    title: `${collectionName} Collection | Photogallery`,
    description: `${collectionName} collection of multiple similar ${collectionName} photos.`,
    openGraph: {
      title: `${collectionName} Collection | Photogallery`,
      description: `${collectionName} collection of multiple similar ${collectionName} photos.`,
      images:
        "https://photogallery.functionbasket.com/icons/site-icon-full.png",
    },
    twitter: {
      card: "summary",
      title: `${collectionName} Collection | Photogallery`,
      description: `${collectionName} collection of multiple similar ${collectionName} photos.`,
      images:
        "https://photogallery.functionbasket.com/icons/site-icon-full.png",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // If collection id not in photo collection
  const collectionId = (await params).id;
  if (!Object.values(photoCollections).includes(collectionId)) {
    return notFound();
  }

  // getting page title
  const collections = photoCollections as Record<string, string>;
  const collectionName = Object.keys(collections)
    .filter((cl) => {
      if (collections[cl] == collectionId) return cl;
    })
    .toString();

  return (
    <>
      <main className="w-full">
        <Header />
        <section className="w-full max-w-screen-2xl mx-auto px-6 py-6 lg:py-12 xl:py-16">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-lg lg:text-xl xl:text-2xl font-semibold xl:font-bold text-gray-100">
              {collectionName} Collection
            </h1>
          </div>
          <section
            className="w-full py-8 lg:py-12 xl:py-16"
            aria-label="collection-grid"
          ></section>
        </section>
      </main>
    </>
  );
}
