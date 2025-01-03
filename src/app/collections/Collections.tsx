"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import ImageCollection from "@/components/Imagecollection/ImageCollection";
import { useFetch } from "@/hooks/useFetch";
import { type PhotoCollectionType } from "@/shared/types/collection";

export default function Collections() {
  const [collections, setCollections] =
    useState<{ name: string; id: string; images: PhotoCollectionType }[]>();
  const [page] = useState(1);
  const { data, fetchResource } = useFetch<{
    result: { name: string; id: string; images: PhotoCollectionType }[];
  }>();

  // fetch collection
  useEffect(() => {
    const fetchCollection = async () => {
      await fetchResource(`/api/collections?page=${page}`);
    };
    fetchCollection();
  }, [page, fetchResource]);

  // update collections
  useEffect(() => {
    if (data?.result) {
      setCollections([...data?.result]);
    }
  }, [data]);

  return (
    <>
      <main className="w-full">
        <Header />
        <section className="w-full max-w-screen-2xl mx-auto px-6 py-6 lg:py-12 xl:py-16">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold xl:font-bold text-gray-300">
              Discover Collections
            </h1>
          </div>
          <section
            className="w-full py-8 lg:py-12 xl:py-16"
            aria-label="collection-grid"
          >
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 lg:gap-y-12 xl:gap-12 xl:gap-y-16">
              <ImageCollection collections={collections} />
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
