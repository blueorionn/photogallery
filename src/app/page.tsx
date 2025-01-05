import Header from "@/components/Header/Header";
import Home from "@/layouts/Home/Home";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <main className="w-full bg-background">
        <Header />
        <Home />
        <Footer />
      </main>
    </>
  );
}
