import type { Metadata } from "next";
import { Suspense } from "react";
import { login } from "./actions";
import LoginPage from "@/www/Login";

export const metadata: Metadata = {
  title: "Login | Photogallery",
};

export default function Page() {
  return (
    <>
      <main className="h-full w-full">
        <section className="h-full w-full grid place-items-center">
          <Suspense>
            <LoginPage login={login} />
          </Suspense>
        </section>
      </main>
    </>
  );
}
