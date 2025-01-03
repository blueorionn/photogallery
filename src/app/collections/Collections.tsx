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
  const [frozen, setFrozen] = useState(false);

  // intersection observer
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  // increment page if intersection
  useEffect(() => {
    if (frozen) return;

    if (isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, [isIntersecting, frozen]);

  // fetched data
  const { data, error, fetchResource } = useFetch<{
    result: { name: string; id: string; images: PhotoCollectionType }[];
  }>();

  // fetch collection
  useEffect(() => {
    if (frozen) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCollection = async () => {
      try {
        await fetchResource(`/api/collections?page=${page}`, signal);

        // if status code is not 200
        if (error) {
          setFrozen(true);
        }
      } catch (error) {
        if (error) {
          setFrozen(true);
        }
      }
    };
    fetchCollection();

    return () => {
      controller.abort();
    };
  }, [page, fetchResource, frozen, error]);

  // update collections
  useEffect(() => {
    if (data?.result) {
      // if collections state if undefined.
      setCollections((collection) => {
        if (!collection) return [...data.result];
        return [...collection, ...data.result];
      });
    }
  }, [data]);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 lg:gap-y-12 xl:gap-12 xl:gap-y-16">
        <ImageCollection collections={collections} />
      </section>
      <div
        aria-label="loader"
        className={`w-full flex justify-center items-center gap-4 my-4 xl:my-6`}
        ref={ref}
      >
        {frozen ? (
          <span className="min-w-36 inline-block h-0.5 bg-gray-700"></span>
        ) : (
          ""
        )}
        {frozen ? (
          <span className="text-gray-500 font-medium text-base xl:text-lg">
            You have reached the end
          </span>
        ) : (
          ""
        )}
        {frozen ? (
          <span className="min-w-36 inline-block h-0.5 bg-gray-700"></span>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
