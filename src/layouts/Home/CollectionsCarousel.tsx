"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { photoCollections } from "@/data/collections";
import { useWindowSize } from "@/hooks/useWindowSize";
import type { CollectionFetch } from "@/shared/types/collectionFetched";
import { useFetch } from "@/hooks/useFetch";

export default function CollectionCarousel() {
  const [translatedWidth, setTranslatedWidth] = useState(0);
  const { width } = useWindowSize();
  const [currentCollection, setCurrentCollection] = useState(
    Object.values(photoCollections)[0]
  );

  // photo collection data
  const [collectionsData, setCollections] = useState<
    CollectionFetch | undefined
  >();
  const { data, fetchResource } = useFetch<CollectionFetch>();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCollection = async () => {
      try {
        setCollections(undefined);
        await fetchResource(`/api/collection/${currentCollection}`, signal);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCollection();

    return () => {
      controller.abort();
    };
  }, [currentCollection, fetchResource]);

  // update data
  useEffect(() => {
    if (data) {
      setCollections(data);
    }
  }, [data]);

  // button handlers for transition
  const handleForward = () => {
    if (translatedWidth < -width) return;
    setTranslatedWidth((prev) => prev - 250);
  };

  const handleBackward = () => {
    if (translatedWidth > 0) return;
    setTranslatedWidth((prev) => prev + 250);
  };

  return (
    <>
      <div className="w-full relative overflow-hidden">
        <button
          type="button"
          className="absolute h-full p-2.5 z-[10] bg-background dark:bg-background-dark dark:brightness-150"
          onClick={handleBackward}
        >
          <span className="sr-only">Backword button</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="h-6 w-6 fill-gray-500 rotate-180"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
        <div
          aria-label="collections navigation"
          className={`group w-full relative flex gap-4 transition-all text-gray-500 dark:text-gray-400`}
          style={{ transform: `translateX(${translatedWidth}px)` }}
        >
          {/* collections key */}
          {Object.entries(photoCollections).map((collection, i) => {
            return (
              <button
                type="button"
                key={i}
                className={`p-2.5 border-2 hover:border-teal-700 rounded-md transition-all hover:bg-teal-700 ${
                  currentCollection === collection[1]
                    ? "bg-teal-600 dark:bg-teal-700 border-teal-600 dark:border-teal-700"
                    : "border-gray-400 dark:border-gray-600"
                }`}
                onClick={() => setCurrentCollection(collection[1])}
              >
                <span className="text-nowrap group-hover:text-gray-700 group-hover:dark:text-gray-300">{collection[0]}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="absolute top-0 right-0 h-full p-2.5 z-[10] bg-background dark:bg-background-dark dark:brightness-150"
          onClick={handleForward}
        >
          <span className="sr-only">Forward button</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="h-6 w-6 fill-gray-500"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
      </div>
      <div className="mt-8 md:mt-16 xl:mt-24 grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4">
        {collectionsData?.colOne.length
          ? collectionsData.colOne.map((collection, i) => {
              if (i >= 5) return;
              return (
                <div
                  key={i}
                  className={`w-full rounded ${
                    i === 0 ? "xl:row-span-2 h-full" : "max-h-96 "
                  }`}
                >
                  <Image
                    src={collection.src.large}
                    alt={collection.alt}
                    height={collection.height}
                    width={collection.width}
                    quality={80}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              );
            })
          : Array.from(Array(5).keys()).map((i) => {
              return (
                <div
                  key={i}
                  className={`xl:min-h-96 w-full bg-gray-800 animate-pulse ${
                    i === 0
                      ? "h-full xl:row-span-2"
                      : "min-h-36 md:min-h-48 lg:min-h-64 "
                  }`}
                >
                  <span className="sr-only">Image {i} Loading...</span>
                </div>
              );
            })}
      </div>
      <div className="group w-full flex justify-center items-center mt-4 md:mt-8 xl:mt-12">
        <Link
          href={`/collection/${currentCollection}`}
          target="_blank"
          className="p-2.5 border-2 border-gray-500 rounded-md group-hover:border-gray-600 group-hover:dark:border-gray-400"
        >
          <span className="text-base text-gray-500 group-hover:text-gray-600 group-hover:dark:text-gray-400">
            Visit Collection
          </span>
        </Link>
      </div>
    </>
  );
}
