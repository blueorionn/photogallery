"use client";
import { Fragment, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Photo } from "@/shared/data.types";
import PhotoCard from "@/components/Photo/PhotoCard";
import { distributePhotosEvenly } from "@/utils/func";

export default function Gallery({ photo }: { photo: Photo[] | null }) {
  const distributedPhotos = distributePhotosEvenly(photo || [], 3);
  const router = useRouter();
  const sentinelRef = useRef<HTMLDivElement>(null);

  // get current page
  const currentPath = usePathname();
  const page = currentPath.split("/")[currentPath.split("/").length - 1];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          router.push(`${parseInt(page) + 1}`);
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
    };
  }, [router, page]);

  return (
    <>
      <section className="h-full w-full max-w-screen-2xl mx-auto py-16 px-8">
        <section className="h-full w-full grid grid-cols-3 gap-4">
          <section
            className="h-full w-full flex flex-col gap-4"
            data-grid-col-1
          >
            {distributedPhotos[0].map((photo, i) => {
              return (
                <Fragment key={i}>
                  <PhotoCard photo={photo} />
                </Fragment>
              );
            })}
          </section>
          <section
            className="h-full w-full flex flex-col gap-4"
            data-grid-col-2
          >
            {distributedPhotos[1].map((photo, i) => {
              return (
                <Fragment key={i}>
                  <PhotoCard photo={photo} />
                </Fragment>
              );
            })}
          </section>
          <section
            className="h-full w-full flex flex-col gap-4"
            data-grid-col-3
          >
            {distributedPhotos[2].map((photo, i) => {
              return (
                <Fragment key={i}>
                  <PhotoCard photo={photo} />
                </Fragment>
              );
            })}
          </section>
        </section>
        <div className="py-4 mt-64" ref={sentinelRef}>
          <span className="sr-only">Observer</span>
        </div>
      </section>
    </>
  );
}
