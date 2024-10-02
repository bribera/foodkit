'use client';

import Head from "next/head"
import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import HowItWork from "@/components/HowItWork";
import MenuList from "@/components/MenuList";
import Discount from "@/components/Discount"
import Footer from "@/components/Footer";


export default function Home() {

  return (
    <div className="w-full h-full ">

      <Head>
        <title>FoodKit - Discover Delicious Menus</title>
        <meta name="description" content="Explore FoodKit, the best place to find delicious and healthy menus."/>
      </Head>
      
        {/* Navbar */}
        <Navbar />
        
        {/* Main */}
        <main>         
          <Header />
          <HowItWork />
          <MenuList />
          <Discount />
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      
    </div>
  );
}
