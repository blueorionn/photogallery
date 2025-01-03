"use client";
import { useEffect, useState } from "react";
import ImageCollection from "@/components/Imagecollection/ImageCollection";
import { useFetch } from "@/hooks/useFetch";
import { type PhotoCollectionType } from "@/shared/types/collection";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Collections() {
  // photo collections
  const [collections, setCollections] =
    useState<{ name: string; id: string; images: PhotoCollectionType }[]>();

  // current api page
  const [page, setPage] = useState(1);

  // freeze fetching if reached page limit
  const [frozen] = useState(false);

  // intersection observer
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  // fetched data
  const { data, fetchResource } = useFetch<{
    result: { name: string; id: string; images: PhotoCollectionType }[];
  }>();

  // fetch collection
  useEffect(() => {
    // don't fetch if page limit reached.
    if (frozen) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCollection = async () => {
      await fetchResource(`/api/collections?page=${page}`, signal);
    };
    fetchCollection();

    return () => {
      controller.abort();
    };
  }, [page, fetchResource, frozen]);

  // update collections
  useEffect(() => {
    if (data?.result) {
      setCollections([...data?.result]);
    }
  }, [data]);

  // increment page if intersection
  useEffect(() => {
    if (isIntersecting) {
      setPage((page) => page++);
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 lg:gap-y-12 xl:gap-12 xl:gap-y-16">
        <ImageCollection collections={collections} />
      </section>
      <div aria-label="loader" className="my-4 xl:my-6" ref={ref}></div>
    </>
  );
}
