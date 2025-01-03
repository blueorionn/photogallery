import type { Metadata } from "next";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Terms of Use | Photogallery",
  description:
    "This page is a terms page for website discussing about website terms and condition.",
  openGraph: {
    title: "Terms of Use | Photogallery",
    description:
      "This page is a terms page for website discussing about website terms and condition.",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Photogallery",
    description:
      "This page is a terms page for website discussing about website terms and condition.",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
  },
};

export default function Terms() {
  return (
    <>
      <main className="w-full">
        <Header />

        <section className="w-full max-w-screen-lg mx-auto px-4 py-4 lg:py-8 text-gray-400">
          <div className="my-4 md:my-8 lg:my-12 xl:my-16">
            <h1 className="my-2 lg:my-4 text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              Terms of Use
            </h1>
            <p className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              Welcome to our PhotoGallery website! By accessing and using this
              website, you agree to the following terms and conditions. Please
              read them carefully before continuing to use the site.
            </p>
          </div>
          <div className="my-1 lg:my-2 xl:my-4">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              1. Purpose of the Website
            </h2>
            <p className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              This website is a casual portfolio project created to showcase
              images and videos fetched using the Pexels API. It is not a
              business website, commercial platform, or wallpaper downloading
              site. All content displayed here is for viewing purposes only.
            </p>
          </div>
          <div className="my-1 lg:my-2 xl:my-4">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              2. Content Ownership
            </h2>
            <div className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              <ul className="w-full mx-3 lg:mx-6 xl:mx-9">
                <li className="list-disc">
                  All photos and videos displayed on this website are sourced
                  from Pexels.
                </li>
                <li className="list-disc">
                  We do not own any of the images or videos featured on this
                  website. The rights to all content belong to their original
                  creators on Pexels.
                </li>
                <li className="list-disc">
                  If you wish to use or download any images, please visit Pexels
                  directly and follow their terms and conditions.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-1 lg:my-2 xl:my-4">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              3. Acceptable Use
            </h2>
            <div className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              <ul className="w-full mx-3 lg:mx-6 xl:mx-9">
                <li className="list-disc">
                  This website is intended for casual browsing and inspiration.
                </li>
                <li className="list-disc">
                  Visitors must not use this website for any illegal, harmful,
                  or malicious purposes.
                </li>
                <li className="list-disc">
                  Do not scrape, copy, or download content from this website.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-1 lg:my-2 xl:my-4">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              4. Rate Limiting
            </h2>
            <p className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              This website operates with a default rate limit due to the nature
              of the Pexels API. Excessive requests may result in temporary
              access limitations. Please browse responsibly.
            </p>
          </div>
          <div className="my-1 lg:my-2 xl:my-4">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              5. Disclaimer of Liability
            </h2>
            <div className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              <ul className="w-full mx-3 lg:mx-6 xl:mx-9">
                <li className="list-disc">
                  This website is provided on an {'"as-is"'} basis for
                  informational and portfolio purposes only.
                </li>
                <li className="list-disc">
                  We do not guarantee the accuracy, completeness, or reliability
                  of the content displayed.
                </li>
                <li className="list-disc">
                  We are not liable for any damages or issues arising from the
                  use of this website.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-1 lg:my-2 xl:my-4">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              6. Third-Party Links
            </h2>
            <p className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              This website may contain links to Pexels or other third-party
              platforms. We are not responsible for the content, terms, or
              policies of these external sites.
            </p>
          </div>
          <div className="my-1 lg:my-2 xl:my-4">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              7. Changes to the Terms
            </h2>
            <p className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              We reserve the right to modify or update these terms at any time
              without prior notice. By continuing to use this website, you agree
              to be bound by the latest version of these terms.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
