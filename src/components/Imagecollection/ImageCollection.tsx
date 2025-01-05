"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { generateRandomString } from "@/shared/utils/funcs";
import { type PhotoCollectionType } from "@/shared/types/collection";

export default function ImageCollection({
  collections,
}: {
  collections:
    | { name: string; id: string; images: PhotoCollectionType }[]
    | undefined;
}) {
  if (!collections) return <LoadingCollection />;

  return collections.map((collection) => {
    return (
      <Fragment key={`${collection.id}_${generateRandomString()}`}>
        <div>
          <div className="w-full h-72 lg:h-80 xl:h-96 rounded-sm lg:rounded flex flex-col gap-2 lg:gap-4 xl:gap-6 overflow-hidden">
            <Link
              href={`/collection/${collection.id}`}
              target="_blank"
              className="relative flex-grow h-full w-full grid grid-rows-6 gap-1 xl:gap-2 overflow-hidden transition-all before:hidden hover:before:block before:content-normal before:h-full before:w-full before:absolute before:inset-0 before:bg-[rgba(0,0,0,.15)]"
            >
              <div className="row-span-4 rounded-sm lg:rounded">
                <Image
                  src={collection.images.media[0].src.large}
                  alt={collection.images.media[0].alt}
                  height={collection.images.media[0].height}
                  width={collection.images.media[0].width}
                  quality={100}
                  className="h-full w-full object-cover rounded-tl-sm rounded-tr-sm lg:rounded-tl lg:rounded-tr"
                />
              </div>
              <div className="row-span-2 flex gap-1 xl:gap-2">
                <div className="h-full w-full">
                  <Image
                    src={collection.images.media[1].src.small}
                    alt={collection.images.media[1].alt}
                    height={collection.images.media[1].height}
                    width={collection.images.media[1].width}
                    quality={90}
                    className="h-full w-full object-cover rounded-bl-sm lg:rounded-bl overflow-clip"
                  />
                </div>
                <div className="h-full w-full">
                  <Image
                    src={collection.images.media[2].src.small}
                    alt={collection.images.media[2].alt}
                    height={collection.images.media[2].height}
                    width={collection.images.media[2].width}
                    quality={90}
                    className="h-full w-full object-cover overflow-clip"
                  />
                </div>
                <div className="h-full w-full">
                  <Image
                    src={collection.images.media[3].src.small}
                    alt={collection.images.media[3].alt}
                    height={collection.images.media[3].height}
                    width={collection.images.media[3].width}
                    quality={90}
                    className="h-full w-full object-cover rounded-br-sm lg:rounded-br overflow-clip"
                  />
                </div>
              </div>
            </Link>
          </div>
          <h2 className="mx-1 lg:mx-2 py-2 lg:py-4 text-lg xl:text-xl text-gray-600 dark:text-gray-400">
            {collection.name}
          </h2>
        </div>
      </Fragment>
    );
  });
}

function LoadingCollection() {
  return (
    <>
      {[...Array(6).keys()].map((id) => {
        return (
          <div
            key={id}
            className="w-full h-72 lg:h-80 xl:h-96 rounded-sm lg:rounded flex flex-col gap-2 lg:gap-4 xl:gap-6 overflow-hidden animate-pulse bg-gray-800"
          >
            <span className="sr-only">Loading image</span>
          </div>
        );
      })}
    </>
  );
}
