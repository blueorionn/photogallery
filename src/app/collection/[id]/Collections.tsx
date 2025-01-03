"use client";
import { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { type PhotoCollectionType } from "@/shared/types/collection";

export default function Collections({
  collectionId,
}: {
  collectionId: string;
}) {
  const [collections, setCollections] = useState<PhotoCollectionType>();
  const [page] = useState(1);
  const { data, fetchResource } = useFetch<PhotoCollectionType>();

  // fetch collection
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCollection = async () => {
      await fetchResource(
        `/api/collection/${collectionId}?page=${page}`,
        signal
      );
    };
    fetchCollection();

    return () => {
      controller.abort();
    };
  }, [page, collectionId, fetchResource]);

  // update collections
  useEffect(() => {
    if (data) {
      setCollections(data);
    }
  }, [data]);

  if (!collections) {
    return <LoadingCollection />;
  }

  return (
    <>
      <ImageGallery data={collections} />
    </>
  );
}

function LoadingCollection() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 lg:gap-y-12 xl:gap-12 xl:gap-y-16">
        {[...Array(6).keys()].map((id) => {
          return (
            <div
              key={id}
              className="w-full h-72 lg:h-80 xl:h-96 rounded lg:rounded-lg flex flex-col gap-2 lg:gap-4 xl:gap-6 overflow-hidden animate-pulse bg-gray-800"
            >
              <span className="sr-only">Loading image</span>
            </div>
          );
        })}
      </section>
    </>
  );
}
