import Link from "next/link";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import CollectionCarousel from "./CollectionsCarousel";
import FeaturedGallery from "@/components/ImageGallery/FeaturedGallery";

// fonts
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });

// function main
export default function Home() {
  return (
    <>
      <section className="w-full max-w-screen-2xl relative mx-auto my-6 md:my-12 xl:my-24 xl:flex xl:flex-row-reverse xl:justify-between">
        <section className="w-full xl:ml-24 grid grid-cols-2 gap-4 xl:relative">
          <div className="absolute xl:hidden h-full w-full inset-0 bg-background opacity-50">
            <span className="sr-only">Background cover</span>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Image
              src={
                "https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              alt="Close-up of a delicious cheeseburger with fries and ketchup served on a tray."
              width={4000}
              height={6000}
              loading="eager"
              className="h-max w-full object-cover rounded"
            />
            <Image
              src={
                "https://images.pexels.com/photos/1371798/pexels-photo-1371798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              alt="Vintage red car with open trunk in a forest, surrounded by camping gear and trees."
              width={4000}
              height={6000}
              loading="eager"
              className="h-max w-full object-cover rounded"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={
                "https://images.pexels.com/photos/1330724/pexels-photo-1330724.png?auto=compress&cs=tinysrgb&h=650&w=940"
              }
              alt="Intimate close-up of a young woman's neck, shoulder, and hand with a gentle touch, showcasing natural beauty."
              width={4000}
              height={6000}
              loading="eager"
              className="h-max w-full object-cover rounded"
            />
            <Image
              src={
                "https://images.pexels.com/photos/94842/pexels-photo-94842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
              alt="A tranquil winter scene of snow-covered pine forests with distant mountains under a clear blue sky."
              width={4000}
              height={6000}
              loading="eager"
              className="h-max w-full object-cover rounded"
            />
            <Image
              src={
                "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
              alt="A solitary silhouette of a man in a jacket gazing at a lake during a peaceful sunset, creating a serene atmosphere."
              width={4000}
              height={6000}
              loading="eager"
              className="h-max w-full object-cover rounded"
            />
          </div>
        </section>
        <section className="w-full h-64 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-max absolute top-[60%] xl:top-0 xl:relative z-[50]">
          <div className="w-full absolute xl:hidden inset-0 z-[10] py-4 bg-background blur-xl opacity-80">
            <span className="sr-only">Bg Background</span>
          </div>
          <div className="max-w-screen-md w-full relative z-[50] my-4 md:my-6 xl:my-8 px-4 xl:px-0">
            <h1
              className={`${ubuntu.className} text-xl md:text-3xl xl:text-6xl cursor-default text-gray-300`}
            >
              Browse endlessly through the collection of photos
            </h1>
            <h3
              className={`my-4 md:my-6 xl:my-8 text-base xl:text-xl font-normal cursor-default text-gray-400`}
            >
              A casual portfolio project created to explore and display the
              beauty of photography. This photogallery is a part of my
              portfolio, showcasing my work with Pexels API and modern
              frameworks like Next.js.
            </h3>
          </div>
          <div className="my-4 md:my-8 xl:my-12 flex items-center gap-2 lg:gap-4 relative z-[50] px-4 xl:px-0">
            <Link
              href={"/gallery"}
              target="_blank"
              className="py-2 lg:py-4 w-36 lg:w-40 xl:w-44 flex justify-center items-center gap-2 rounded-full bg-teal-700 hover:bg-transparent border-2 border-teal-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="h-6 w-6 fill-gray-300 transition-all"
              >
                <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm600-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520H720Zm40-80h80v-80h-80v80ZM120-280h400v-400H120v400Zm40-80h320L375-500l-75 100-55-73-85 113Zm560 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200H720Zm40-80h80v-80h-80v80Zm-640 0v-400 400Zm640-320v-80 80Zm0 320v-80 80Z" />
              </svg>
              <span className="text-gray-300 text-sm lg:text-base">
                Gallery
              </span>
            </Link>
            <Link
              href={"/collections"}
              target="_blank"
              className="group py-2 lg:py-4 w-36 lg:w-40 xl:w-44 flex justify-center items-center gap-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="h-6 w-6 fill-gray-400 group-hover:fill-gray-200 transition-all"
              >
                <path d="M320-320h480v-480h-80v280l-100-60-100 60v-280H320v480Zm0 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm360-720h200-200Zm-200 0h480-480Z" />
              </svg>
              <span className="text-sm lg:text-base text-gray-400 group-hover:text-gray-200 transition-all">
                Collections
              </span>
            </Link>
          </div>
        </section>
      </section>
      <section className="w-full max-w-screen-2xl mx-auto relative my-40 sm:my-44 md:my-48">
        <h2
          className={`${ubuntu.className} px-4 xl:px-0 text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-default text-gray-400`}
        >
          Discover
        </h2>
        <div className="w-full mt-8">
          <CollectionCarousel />
        </div>
      </section>
      <section className="w-full max-w-screen-2xl mx-auto relative my-36 sm:my-40 md:my-44">
        <h2
          className={`${ubuntu.className} px-4 xl:px-0 text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-default text-gray-400`}
        >
          Browse
        </h2>
        <div className="w-full mt-8">
          <FeaturedGallery />
        </div>
        <div className="group w-full flex justify-center items-center mt-4 md:mt-8 xl:mt-12">
          <Link
            href={`/gallery`}
            target="_blank"
            className="p-2.5 border-2 border-gray-500 rounded-md group-hover:border-gray-400"
          >
            <span className="text-base text-gray-500 group-hover:text-gray-400">
              Visit Gallery
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
