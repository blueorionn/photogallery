"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { CollectionFetch } from "@/shared/types/collectionFetched";

export default function FeaturedGallery() {
  // photo collections
  const [collections, setCollections] = useState<CollectionFetch>();

  // current api page
  const [page, setPage] = useState(1);

  // number of columns
  const [col, setCol] = useState(1);
  const { width } = useWindowSize();

  // initialize column
  useMemo(() => {
    // predefined widths
    const widthRange = { smallWidth: 0, mediumWidth: 768, largeWidth: 1280 };

    // computing collection for small width
    if (width >= widthRange.smallWidth && width <= widthRange.mediumWidth) {
      setCol(1);
    }

    // computing collection for medium width
    if (width >= widthRange.mediumWidth && width <= widthRange.largeWidth) {
      setCol(2);
    }

    // computing collection for large width
    if (width >= widthRange.largeWidth) {
      setCol(3);
    }
  }, [width]);

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
  const { data, error, fetchResource } = useFetch<CollectionFetch>();

  // fetch collection
  useEffect(() => {
    // don't fetch if page limit reached.
    if (frozen) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCollection = async () => {
      try {
        await fetchResource(`/api/gallery?page=${page}&col=${col}`, signal);

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
  }, [fetchResource, frozen, page, error, col]);

  // update collections
  useEffect(() => {
    if (data) {
      setCollections((prev) => {
        if (!prev) return data;

        return {
          colOne: [...prev.colOne, ...data.colOne],
          colTwo: [...prev.colTwo, ...data.colTwo],
          colThree: [...prev.colThree, ...data.colThree],
        };
      });

      // if result is empty.
      if (data.colOne.length < 1) setFrozen(true);
    }
  }, [data, frozen]);

  if (!collections) {
    return <LoadingCollection />;
  }

  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div data-grid-col="1" className="flex flex-col gap-4">
          {collections.colOne.map((photo) => {
            return (
              <div key={photo.id}>
                <Link
                  href={photo.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="relative block w-full transition-all before:hidden hover:before:block before:content-normal before:h-full before:w-full before:absolute before:inset-0 before:bg-[rgba(0,0,0,.15)]"
                >
                  <Image
                    src={photo.src.large}
                    alt={photo.alt}
                    height={photo.height}
                    width={photo.width}
                    quality={90}
                    loading="lazy"
                    className="h-full w-full object-cover rounded"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={photo.photographer_url}
                  rel="noopener noreferrer nofollow"
                  className="flex gap-2 items-center my-2 md:my-4 xl:my-6"
                >
                  <Image
                    src={"/icons/pexels-logo.png"}
                    alt="Pexels attribution logo"
                    height={50}
                    width={50}
                    loading="lazy"
                    className="h-4 w-4 object-contain"
                  />
                  <span className="text-gray-400">
                    Photo by {photo.photographer}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <div data-grid-col="2" className="hidden md:flex flex-col">
          {collections.colTwo.map((photo) => {
            return (
              <div key={photo.id}>
                <Link
                  href={photo.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="relative block w-full transition-all before:hidden hover:before:block before:content-normal before:h-full before:w-full before:absolute before:inset-0 before:bg-[rgba(0,0,0,.15)]"
                >
                  <Image
                    src={photo.src.large}
                    alt={photo.alt}
                    height={photo.height}
                    width={photo.width}
                    quality={90}
                    loading="lazy"
                    className="h-full w-full object-cover rounded"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={photo.photographer_url}
                  rel="noopener noreferrer nofollow"
                  className="flex gap-2 items-center my-2 md:my-4 xl:my-6"
                >
                  <Image
                    src={"/icons/pexels-logo.png"}
                    alt="Pexels attribution logo"
                    height={50}
                    width={50}
                    loading="lazy"
                    className="h-4 w-4 object-contain"
                  />
                  <span className="text-gray-400">
                    Photo by {photo.photographer}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <div data-grid-col="3" className="hidden xl:flex flex-col">
          {collections.colThree.map((photo) => {
            return (
              <div key={photo.id}>
                <Link
                  href={photo.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="relative block w-full transition-all before:hidden hover:before:block before:content-normal before:h-full before:w-full before:absolute before:inset-0 before:bg-[rgba(0,0,0,.15)]"
                >
                  <Image
                    src={photo.src.large}
                    alt={photo.alt}
                    height={photo.height}
                    width={photo.width}
                    quality={90}
                    loading="lazy"
                    className="h-full w-full object-cover rounded"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={photo.photographer_url}
                  rel="noopener noreferrer nofollow"
                  className="flex gap-2 items-center my-2 md:my-4 xl:my-6"
                >
                  <Image
                    src={"/icons/pexels-logo.png"}
                    alt="Pexels attribution logo"
                    height={50}
                    width={50}
                    loading="lazy"
                    className="h-4 w-4 object-contain"
                  />
                  <span className="text-gray-400">
                    Photo by {photo.photographer}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <div
        aria-label="loader"
        className={`w-full flex justify-center items-center gap-4 my-4 xl:my-6`}
        ref={ref}
      >
        {frozen ? (
          <span className="min-w-16 md:min-w-24 xl:min-w-36 inline-block h-0.5 bg-gray-700"></span>
        ) : (
          ""
        )}
        {frozen ? (
          <span className="text-gray-500 font-medium text-base xl:text-lg text-nowrap whitespace-nowrap">
            You have reached the end
          </span>
        ) : (
          ""
        )}
        {frozen ? (
          <span className="min-w-16 md:min-w-24 xl:min-w-36 inline-block h-0.5 bg-gray-700"></span>
        ) : (
          ""
        )}
      </div>
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
