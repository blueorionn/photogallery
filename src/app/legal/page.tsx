import type { Metadata } from "next";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Legal Information | Photogallery",
  description:
    "This page is an terms page for website discussing about website terms and condition.",
  openGraph: {
    title: "Legal Information | Photogallery",
    description:
      "This page is an terms page for website discussing about website terms and condition.",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
  },
  twitter: {
    card: "summary",
    title: "Legal Information | Photogallery",
    images: "https://photogallery.functionbasket.com/icons/site-icon-full.png",
    description:
      "This page is an terms page for website discussing about website terms and condition.",
  },
};

export default function Legal() {
  return (
    <>
      <main className="w-full">
        <Header />
        <section className="w-full max-w-screen-2xl mx-auto px-4 py-4 lg:py-8 text-gray-400">
          <div className="my-4 md:my-8 lg:my-12 xl:my-16">
            <h1 className="my-2 lg:my-4 text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              Legal Information
            </h1>
            <p className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              This Legal Information page provides details about the use of this
              website, its content, and its compliance with relevant terms and
              conditions. Please read this page carefully before using the
              website.
            </p>
          </div>
          <div className="my-2 lg:my-4 xl:my-6">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              1. Copyright Information
            </h2>
            <div className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              <ul className="w-full mx-3 lg:mx-6 xl:mx-9">
                <li className="list-disc">
                  All images and videos displayed on this website are sourced
                  from Pexels via their API.
                </li>
                <li className="list-disc">
                  The original copyright of all photos and videos belongs to
                  their respective creators on Pexels. We do not claim any
                  ownership of the visual content showcased on this site.
                </li>
                <li className="list-disc">
                  This website does not alter or modify the original content in
                  any way. Images and videos are displayed exactly as provided
                  by Pexels.
                </li>
                <li className="list-disc">
                  If you wish to download, share, or use any of the images or
                  videos displayed on this site, you must do so directly through
                  Pexels and adhere to their terms and conditions.
                </li>
                <li className="list-disc">
                  Unauthorized use, copying, or redistribution of content from
                  this website is strictly prohibited.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-2 lg:my-4 xl:my-6">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              2. Use of the Pexels API
            </h2>
            <div className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              <ul className="w-full mx-3 lg:mx-6 xl:mx-9">
                <li className="list-disc">
                  This website integrates the Pexels API to dynamically fetch
                  and display photos and videos.
                </li>
                <li className="list-disc">
                  We comply fully with Pexels{"'"} API usage guidelines,
                  including proper attribution where applicable.
                </li>
                <li className="list-disc">
                  The content displayed on this site is intended for
                  demonstration and viewing purposes only. Users are not
                  permitted to download or redistribute images directly from
                  this website.
                </li>
                <li className="list-disc">
                  This site is not affiliated with or endorsed by Pexels.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-2 lg:my-4 xl:my-6">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              3. Limitation of Liability
            </h2>
            <div className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              <ul className="w-full mx-3 lg:mx-6 xl:mx-9">
                <li className="list-disc">
                  This website is provided {'"as-is"'} for informational and
                  creative purposes only.
                </li>
                <li className="list-disc">
                  We make no warranties, either express or implied, regarding
                  the accuracy, reliability, or completeness of the content
                  displayed.
                </li>
                <li className="list-disc">
                  While every effort is made to ensure proper functionality, we
                  are not responsible for any technical issues, interruptions,
                  or errors that may occur while using this site.
                </li>
                <li className="list-disc">
                  <strong>Use at Your Own Risk:</strong> Visitors assume all
                  responsibility for their use of this website. We disclaim all
                  liability for any damages or losses, whether direct or
                  indirect, arising from the use of this site or its content.
                </li>
                <li className="list-disc">
                  This website is not intended to replace professional services,
                  nor is it suitable for commercial use or purposes.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-2 lg:my-4 xl:my-6">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              4. Website Purpose
            </h2>
            <div className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              <ul className="w-full mx-3 lg:mx-6 xl:mx-9">
                <li className="list-disc">
                  This website is a personal portfolio designed to demonstrate
                  the capabilities of web development and API integration using
                  the Pexels API.
                </li>
                <li className="list-disc">
                  It is not a business website, commercial platform, or a
                  resource site for downloading wallpapers.
                </li>
                <li className="list-disc">
                  Visitors should treat this site as a casual and creative
                  project, not as a tool for building photo collections or
                  conducting business-related activities.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-2 lg:my-4 xl:my-6">
            <h2 className="my-1 lg:my-2 text-base md:text-lg xl:text-xl font-bold">
              5. Updates to This Page
            </h2>
            <p className="px-3 lg:px-0 text-sm md:text-base xl:text-lg font-normal xl:font-medium">
              We reserve the right to modify this Legal Information page at any
              time without prior notice. By continuing to use the website, you
              agree to the most recent version of this page.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
