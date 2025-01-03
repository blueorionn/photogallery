"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";
import { Mochiy_Pop_P_One, Inter } from "next/font/google";
import styles from "./styles.module.css";

// header font
const headerFont = Mochiy_Pop_P_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const inter = Inter({ subsets: ["latin"], weight: "500" });

// Header Component
export default function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const themeManager = useContext(ThemeContext);
  const pathname = usePathname();

  const reflectSideBarToogle = (
    classnames: string[],
    fallbackclass: string[]
  ) => {
    return isSideBarOpen ? `${[...classnames]}` : `${[...fallbackclass]}`;
  };
  const isLinkActive = (
    link: string,
    classname = `${styles["_router-link-active"]}`
  ) => {
    return pathname === link ? classname : "";
  };

  return (
    <>
      <header className="w-full relative z-[10] border-b xl:border-b-2 border-gray-800">
        <nav className="mx-auto w-full max-w-screen-2xl p-4 md:py-6 lg:py-8 flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex justify-center items-center gap-1 md:gap-2 lg:gap-4 cursor-pointer">
              <Image
                src={"/icons/site-icon.png"}
                alt="Website Logo"
                height="512"
                width="512"
                className="aspect-auto h-8 w-8"
              />
              <h1
                className={`text-lg md:text-xl lg:text-2xl text-gray-100 cursor-pointer ${headerFont.className}`}
              >
                Photo<span className="text-emerald-500">gallery</span>
              </h1>
            </div>
          </Link>

          <div className={`mt-2 lg:mt-0 ${inter.className} text-gray-300`}>
            <div className="hidden xl:flex items-center gap-4 xl:mt-2">
              <Link href="/about" className={`${isLinkActive("/about")}`}>
                <span className="tex-base hover:text-emerald-500 transition-all">
                  About
                </span>
              </Link>
              <Link href="/terms" className={`${isLinkActive("/terms")}`}>
                <span className="tex-base hover:text-emerald-500 transition-all">
                  Terms
                </span>
              </Link>
              <Link href="/legal" className={`${isLinkActive("/legal")}`}>
                <span className="tex-base hover:text-emerald-500 transition-all">
                  Legal
                </span>
              </Link>
              <div className="h-6 w-0.5 bg-gray-600 border border-gray-600">
                <span className="sr-only">Divider</span>
              </div>
              <button
                type="button"
                onClick={() => themeManager?.toggleTheme()}
                className="min-w-12 p-0.5 rounded-full flex bg-gray-800 border border-gray-500"
              >
                <span className="sr-only">Theme toogle button</span>
                <div className="relative w-max flex justify-end items-center rounded-full dark:grow transition-all duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="fill-gray-800 h-4 w-4 bg-white rounded-full block dark:hidden transition-all duration-300 ease-in-out"
                  >
                    <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="fill-gray-400 h-4 w-4 bg-black rounded-full hidden dark:block transition-all duration-300 ease-in-out"
                  >
                    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                  </svg>
                </div>
              </button>
              <Link
                href={"https://github.com/blueorionn/photogallery"}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span className="sr-only">Github repo url</span>
                <svg
                  className="fill-gray-400 h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 hover:fill-gray-200 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  ></path>
                </svg>
              </Link>
            </div>

            <button
              type="button"
              className="xl:hidden"
              onClick={() => setIsSideBarOpen((prev) => !prev)}
            >
              <span className="sr-only">Menu Button</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-gray-300"
                viewBox="0 0 512 512"
              >
                <path
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth="48"
                  d="M88 152h336M88 256h336M88 360h336"
                />
              </svg>
            </button>
          </div>
        </nav>

        <aside
          className={`xl:hidden h-[100vh] z-[100] w-[80%] absolute inset-0 flex flex-col px-6 bg-gray-800 transition-all ${reflectSideBarToogle(
            [`${styles["_showSidebar"]}`],
            [`${styles["_hideSidebar"]}`]
          )}`}
        >
          <div className="w-full text-right py-8 flex justify-between items-center">
            <div className="flex justify-center items-center gap-1 md:gap-2 lg:gap-4">
              <Image
                src="/icons/site-icon.png"
                alt="Website Logo"
                height="512"
                width="512"
                className="aspect-auto h-8 w-8"
              />
              <h1
                className={`cursor-default text-lg md:text-xl lg:text-2xl text-gray-100 ${headerFont.className}`}
              >
                Photo<span className="text-emerald-500">gallery</span>
              </h1>
            </div>
            <button
              type="button"
              onClick={() => setIsSideBarOpen((prev) => !prev)}
            >
              <span className="sr-only">Close Button</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 stroke-gray-300 fill-gray-300"
                viewBox="0 -960 960 960"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
          <div
            className={`flex flex-col gap-2 mt-8 ${inter.className} text-gray-300`}
          >
            <Link href="/about" className={`${isLinkActive("/about")}`}>
              <span className="tex-base hover:text-emerald-500 transition-all">
                About
              </span>
            </Link>
            <Link href="/terms" className={`${isLinkActive("/terms")}`}>
              <span className="tex-base hover:text-emerald-500 transition-all">
                Terms
              </span>
            </Link>
            <Link href="/legal" className={`${isLinkActive("/legal")}`}>
              <span className="tex-base hover:text-emerald-500 transition-all">
                Legal
              </span>
            </Link>
          </div>
        </aside>
      </header>
    </>
  );
}
