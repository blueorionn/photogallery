import { notFound } from "next/navigation";
import { fetchHiddenPhotos } from "@/lib/fetch";
import { createPhotosSize } from "@/utils/func";
import Header from "@/components/Header/Header";
import Gallery from "@/www/Gallery";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const pageParam = await params;
  const page = (await pageParam).page;

  if (isNaN(parseInt(page)) || parseInt(page) < 1) {
    return notFound();
  }

  // fetch photos
  const [min, max] = createPhotosSize(parseInt(page));
  const { data } = await fetchHiddenPhotos(min, max);

  // if list index out of range
  if (!data || data?.length < 1) {
    notFound();
  }

  // mapping data to original url
  data.map(
    (photo) =>
      (photo.photoname = `${process.env.CLOUD_OBJECT_STORAGE_LOCATION}${photo.photoname}`)
  );

  return (
    <>
      <main className="w-full h-full bg-background dark:bg-background-dark">
        <Header />
        <Gallery photo={data} />
      </main>
    </>
  );
}
