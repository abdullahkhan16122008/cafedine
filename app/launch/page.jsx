"use client"
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Article1 from "../components/Article1";
import About from "../components/About";
import Menu from "../components/Menu";
import Phone from "../components/Phone";
import FooterSlider from "../components/FooterSlider";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=''>

      <Header />
      <Hero />
      <Article1 />
      <About />
      <Menu theme='text-gray-500' starter='text-gray-500' launch='theme-color' dinner='text-gray-500' display='hidden' display2='flex' display3='flex' display4='hidden' display5='hidden' display6='hidden' display7='flex' display8='flex' />
      <Phone />
      <FooterSlider />
      <Footer />

    </div>
  );
}
