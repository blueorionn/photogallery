"use client";
import { Fragment, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";
import { distributePhotosEvenly } from "@/shared/utils/funcs";
import {
  PhotoCollectionMedia,
  type PhotoCollectionType,
} from "@/shared/types/collection";

export default function ImageGallery({ data }: { data: PhotoCollectionType }) {
  const [collection, setCollection] = useState<Array<PhotoCollectionMedia>[]>();
  const { width } = useWindowSize();

  const initializeCollection = useCallback(() => {
    // predefined widths
    const widthRange = { smallWidth: 0, mediumWidth: 768, largeWidth: 1280 };

    // computing collection for small width
    if (width >= widthRange.smallWidth && width <= widthRange.mediumWidth) {
      // clean value
      setCollection([]);

      // push content
      setCollection([...distributePhotosEvenly(data.media, 1)]);
    }

    // computing collection for medium width
    if (width >= widthRange.mediumWidth && width <= widthRange.largeWidth) {
      // clean value
      setCollection([]);

      // push content
      setCollection([...distributePhotosEvenly(data.media, 2)]);
    }

    // computing collection for large width
    if (width >= widthRange.largeWidth) {
      // clean value
      setCollection([]);

      // push content
      setCollection([...distributePhotosEvenly(data.media, 3)]);
    }
  }, [width, data.media]);

  useEffect(() => {
    initializeCollection();
  }, [initializeCollection]);

  return (
    <>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {collection?.map((item, index) => {
          return (
            <div
              className="w-full flex flex-col gap-4 rounded"
              key={item[index].id}
            >
              {item.map((image) => {
                return (
                  <div key={image.id}>
                    <Link
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="relative block w-full transition-all before:hidden hover:before:block before:content-normal before:h-full before:w-full before:absolute before:inset-0 before:bg-[rgba(0,0,0,.15)]"
                    >
                      <Image
                        src={image.src.large}
                        alt={image.alt}
                        height={image.height}
                        width={image.width}
                        quality={90}
                        loading="lazy"
                        className="h-full w-full object-cover rounded"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={image.photographer_url}
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
                        Photo by {image.photographer}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </>
  );
}
