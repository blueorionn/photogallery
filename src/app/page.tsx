import Header from "@/components/Header/Header";
import Link from "next/link";
import { Image as ImageIcon, Lock } from "@geist-ui/icons";

export default function Page() {
  return (
    <>
      <main className="w-full bg-background dark:bg-background-dark">
        <Header />

        <section className="w-full max-w-screen-md mx-auto mt-16">
          <p className="text-base xl:text-lg text-gray-800 dark:text-gray-400">
            My photo gallery project is built with Next.js and Supabase,
            offering a seamless way to browse and explore high-quality images.
            Supabase handles secure image storage and retrieval, while Next.js
            ensures a fast and smooth user experience with dynamic loading.
            Users can view, search, and interact with the gallery effortlessly,
            making it a visually engaging platform.
          </p>
          <section className="w-full mt-12 flex justify-center items-center gap-4">
            <Link
              href={"/gallery/1"}
              className="flex justify-center items-center gap-2 text-gray-300 w-full min-h-64 bg-sky-800 hover:bg-sky-700 rounded-md transition-all"
            >
              <ImageIcon size={32} color="#d1d5db" />
              <span className="text-base xl:text-lg font-semibold">
                Gallery
              </span>
            </Link>
            <Link
              href={"/private/gallery/1"}
              className="flex justify-center items-center gap-2 text-gray-300 w-full min-h-64 bg-pink-800 hover:bg-pink-700 rounded-md transition-all"
            >
              <Lock size={32} color="#d1d5db" />
              <span className="text-base xl:text-lg font-semibold">
                Private
              </span>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}
