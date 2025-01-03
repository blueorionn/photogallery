"use client";
import { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { type PhotoCollectionType } from "@/shared/types/collection";

export default function Collections({
  collectionId,
}: {
  collectionId: string;
}) {
  // photo collections
  const [collections, setCollections] = useState<PhotoCollectionType>();

  // current api page
  const [page, setPage] = useState(1);

  // freeze fetching if reached page limit
  const [frozen, setFrozen] = useState(false);

  // intersection observer
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  // increment page if intersection
  useEffect(() => {
    if (isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, [isIntersecting]);

  // fetched data
  const { data, fetchResource } = useFetch<PhotoCollectionType>();

  // fetch collection
  useEffect(() => {
    // don't fetch if page limit reached.
    if (frozen) return;

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
  }, [page, collectionId, fetchResource, frozen]);

  // update collections
  useEffect(() => {
    if (data) {
      setCollections(data);
      // if media is null freeze api fetching
      if (data.media.length < 1) setFrozen(true);
    }
  }, [data, frozen]);

  if (!collections) {
    return <LoadingCollection />;
  }

  return (
    <>
      <ImageGallery data={collections} />
      <div aria-label="loader" className="my-4 xl:my-6" ref={ref}></div>
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
