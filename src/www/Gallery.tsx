import type { Photo } from "@/shared/data.types";
import { Fragment } from "react";
import PhotoCard from "@/components/Photo/PhotoCard";
import { distributePhotosEvenly } from "@/utils/func";

export default function Gallery({ photo }: { photo: Photo[] | null }) {
  const distributedPhotos = distributePhotosEvenly(photo || [], 3);

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
      </section>
    </>
  );
}
