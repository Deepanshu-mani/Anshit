"use client";

import { motion, useScroll } from "framer-motion";
import ReactLenis from "@studio-freight/react-lenis";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import ContactForm from "@/components/Core/ContactUs/ContactUsSec";
import HeroSec1 from "@/components/Core/HeroSection/HeroSec1";
import Banner from "@/components/Core/Homepage/Banner";
import ProductsSection from "@/components/Core/Products/ProductsSection";
import Link from "@/components/Common/Link"; 

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <ReactLenis root>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-[#1ed8e2] fixed z-100 shadow-md w-full h-3 top-0 left-0 origin-left shadow-[#1eaee28a]"
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <section id="home">
            <Banner />
          </section>

          <section id="about">
            <Link />
          </section>
          <HeroSec1 />
          <section id="products">
            
            <ProductsSection />
          </section>

          <section id="contact">
            <ContactForm />
          </section>
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}