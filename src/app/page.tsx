import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Menu from "@/components/Menu";
import WeeklyHighlight from "@/components/WeeklyHighlight";
import Gallery from "@/components/Gallery";
import OrderInfo from "@/components/OrderInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <WeeklyHighlight />
      <Gallery />
      <OrderInfo />
      <Footer />
    </>
  );
}
