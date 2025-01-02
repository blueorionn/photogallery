import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Photogallery",
  openGraph: {
    title: "About | Photogallery",
    description:
      "This page is an about page for website discussing about website terms and legality.",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
  },
  description:
    "This page is an about page for website discussing about website terms and legality.",
  twitter: {
    card: "summary",
    title: "About | Photogallery",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
    description:
      "This page is an about page for website discussing about website terms and legality.",
  },
};

export default function About() {
  return (
    <>
      <main className="h-[100vh] overflow-y-auto w-full bg-gray-800">
        <Header />
        <section className="py-4 lg:py-8 xl:py-10">
          <h1 className="text-center text-lg lg:text-xl xl:text-2xl font-bold text-gray-100">
            About this project
          </h1>
        </section>
        <section className="w-full max-w-screen-xl mx-auto px-4 py-4 lg:py-8 xl:py-12 text-base xl:text-lg font-normal xl:font-medium text-gray-300">
          <p className="mt-2 xl:mt-4">Welcome to our PhotoGallery!</p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 xl:mt-4 text-blue-400"
          >
            Photogallery github repository
          </a>
          <p className="mt-2 xl:mt-4">
            This website is a casual portfolio project created to explore and
            display the beauty of photography. All the photos and videos
            showcased here are fetched using the{" "}
            <Link href="https://www.pexels.com/api/" target="_blank">
              <span className="text-blue-500">Pexels API</span>
            </Link>
            , a platform that provides high-quality and free-to-use images and
            videos from talented photographers around the world.
          </p>
          <p className="mt-1 xl:mt-2">
            We adhere strictly to the legal terms and guidelines set by Pexels
            to ensure the proper and ethical use of their API and content. While
            we take pride in curating this collection, it is important to note
            that we do not own any of the photos or videos featured here. The
            rights to these images remain with their original creators on
            Pexels.
          </p>
          <p className="mt-1 xl:mt-2">
            This site is not a business website, nor is it intended for
            commercial purposes. This website is not intended to compete with
            any other platform or services. It is purely a personal and casual
            portfolio to display the possibilities of web development and design
            while working with APIs like Pexels. Visitors are encouraged to view
            this site as a creative exploration rather than a platform for
            downloading wallpapers or building photo collections.
          </p>
          <p className="mt-1 xl:mt-2">
            Additionally, this is not a wallpaper or resource site for
            downloading images. If you find an image you love, we encourage you
            to visit
            <Link
              href="https://www.pexels.com/"
              target="_blank"
              className="mx-1"
            >
              <span className="text-blue-500">Pexels</span>
            </Link>
            directly to view more from the original creators and download images
            according to their terms.
          </p>
          <p className="mt-1 xl:mt-2">
            Our website operates under a default rate limit, so you may
            occasionally experience limitations if browsing extensively. We
            appreciate your understanding and encourage you to explore the
            content in a relaxed and casual way.
          </p>
          <p className="mt-1 xl:mt-2">
            For further details on acceptable use and our policies, please visit
            our
            <Link href="/legal" className="mx-1">
              <span className="text-blue-500">Legal</span>
            </Link>
            and
            <Link href="/terms" className="mx-1">
              <span className="text-blue-500">Terms</span>
            </Link>
            pages.
          </p>
          <p className="mt-1 xl:mt-2">
            Thank you for stopping by and enjoying this creative portfolio. We
            hope it inspires you as much as it inspired us to create it!
          </p>
        </section>
      </main>
    </>
  );
}
