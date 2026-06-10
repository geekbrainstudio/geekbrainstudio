import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import ScrollTimeline from "@/components/ScrollTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <ScrollTimeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
