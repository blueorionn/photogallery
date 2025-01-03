"use client";
import { useEffect, useState } from "react";
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
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCollection = async () => {
      await fetchResource(`/api/collections?page=${page}`, signal);
    };
    fetchCollection();

    return () => {
      controller.abort();
    };
  }, [page, fetchResource]);

  // update collections
  useEffect(() => {
    if (data?.result) {
      setCollections([...data?.result]);
    }
  }, [data]);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 lg:gap-y-12 xl:gap-12 xl:gap-y-16">
        <ImageCollection collections={collections} />
      </section>
    </>
  );
}
