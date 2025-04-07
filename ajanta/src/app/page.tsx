"use client";

import { motion, useScroll } from "framer-motion";
import ReactLenis from "@studio-freight/react-lenis";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import ContactForm from "@/components/Core/ContactUs/ContactUsSec";
import AboutUs from "@/components/Core/Homepage/AboutUs";
import WhyChooseUs from "@/components/Core/Homepage/WhyChooseUs";
import Banner from "@/components/Core/Homepage/Banner";
import ProductsSection from "@/components/Core/Products/ProductsSection";
import Link from "@/components/Common/Link";
import TopButton from "@/components/Common/topBtn";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <ReactLenis root>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-red-500 fixed z-100 shadow-md w-full h-0.5 top-0 left-0 origin-left "
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <section id="home">
            <Banner />
          </section>

          <section id="products">
            <ProductsSection />
          </section>

          <section id="choose">
            <WhyChooseUs />
          </section>

          <section id="about">
            <AboutUs />
          </section>
         

          
            <Link />
            <TopButton />
          

          <section id="contact">
            <ContactForm />
          </section>
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}
