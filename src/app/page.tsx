import Header from "@/components/Header/Header";
import Home from "@/layouts/Home/Home";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <main className="w-full bg-background dark:bg-background-dark">
        <Header />
        <Home />
        <Footer />
      </main>
    </>
  );
}
