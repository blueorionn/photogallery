"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Mochiy_Pop_P_One, Inter } from "next/font/google";
import styles from "./styles.module.css";

// header font
const headerFont = Mochiy_Pop_P_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const inter = Inter({subsets: ["latin"], weight: "500"})

// Header Component
export default function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
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
            <div className="hidden xl:flex gap-8 xl:mt-2">
              <Link
                href="/about"
                className={`${isLinkActive("/about")}`}
              >
                <span className="tex-base hover:text-emerald-500 transition-all">
                  About
                </span>
              </Link>
              <Link
                href="/terms"
                className={`${isLinkActive("/terms")}`}
              >
                <span className="tex-base hover:text-emerald-500 transition-all">
                  Terms
                </span>
              </Link>
              <Link
                href="/legal"
                className={`${isLinkActive("/legal")}`}
              >
                <span className="tex-base hover:text-emerald-500 transition-all">
                  Legal
                </span>
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
          <div className={`flex flex-col gap-2 mt-8 ${inter.className} text-gray-300`}>
            <Link
              href="/about"
              className={`${isLinkActive("/about")}`}
            >
              <span className="tex-base hover:text-emerald-500 transition-all">
                About
              </span>
            </Link>
            <Link
              href="/terms"
              className={`${isLinkActive("/terms")}`}
            >
              <span className="tex-base hover:text-emerald-500 transition-all">
                Terms
              </span>
            </Link>
            <Link
              href="/legal"
              className={`${isLinkActive("/legal")}`}
            >
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
