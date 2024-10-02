import Image from 'next/image'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"



const Footer = () => {
  return (
    <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="pt-[80px]">

      <div className="pt-[80px] px-[130px] bg-first">
        <div className="  gap-x-[20px] gap-y-[50px] lg:gap-y-0 lg:gap-x-0 grid lg:grid-cols-4 grid-cols-2   border-b-[#1D1D1D80] border-b-[1px] pb-[91px]">
          {/* logo & informations */}
          <div className="flex flex-col gap-[32px]">
            <div className="">
              <Image alt="logo" src="/logo.png" width={116} height={30} />
            </div>
            {/* sous-titre */}
            <div className="">
              <p className="font-[400] text-[20px] leading-[25px] text-[#1D1D1DB2]">Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi</p>
            </div>
            {/* les icons */}
            <div className="flex gap-[24px] items-center">
              {/* instagram */}
              <div className="shadow-md shadow-[#1D1D1D40] bg-white text-[22px] p-[10px] rounded-[50%] hover:bg-second hover:shadow-xl">
                <FaInstagram />
              </div>
              {/* facebook*/}
              <div className="shadow-md shadow-[#1D1D1D40] bg-second text-[22px] p-[10px] rounded-[50%]">
                <FaFacebookF />
              </div>
              {/* twitter*/}
              <div className="shadow-md shadow-[#1D1D1D40] bg-white text-[22px] p-[10px] rounded-[50%] hover:bg-second hover:shadow-xl">
                <FaTwitter />
              </div>
            </div>
          </div>
          {/* company */}
          <div className="">
            {/* titre */}
            <div className="">
              <p className="pb-[31px] font-[500] text-[20px] leading-[25px] ">Company</p>
            </div>
            {/* links */}
            <div className="flex flex-col gap-[16px] text-black ">
              <Link href="/" className="text-[18px] font-[400] leading-[22.5px] text-[#1D1D1DB2]">About Us</Link>
              <Link href="/" className="text-[18px] font-[400] leading-[22.5px] text-[#1D1D1DB2]">Career</Link>
              <Link href="/" className="text-[18px] font-[400] leading-[22.5px] text-[#1D1D1DB2]">How It Work</Link>
            </div>
          </div>
          {/* policy */}
          <div className="">
            {/* titre */}
            <div className="">
              <p className="pb-[31px] font-[500] text-[20px] leading-[25px] ">Policy</p>
            </div>
            {/* links */}
            <div className="flex flex-col gap-[16px] text-black ">
              <Link href="/" className="text-[18px] font-[400] leading-[22.5px] text-[#1D1D1DB2]">FAQ</Link>
              <Link href="/" className="text-[18px] font-[400] leading-[22.5px] text-[#1D1D1DB2]">Privacy</Link>
              <Link href="/" className="text-[18px] font-[400] leading-[22.5px] text-[#1D1D1DB2]">Shipping</Link>
            </div>
          </div>
          {/* get in touch */}
          <div className="">
            {/* titre */}
            <div className="">
              <p className="pb-[31px] font-[500] text-[20px] leading-[25px] ">Get In Touch</p>
            </div>
            {/* numero contact */}
            <div className="flex flex-col gap-[16px] text-black ">
              <p className="text-[18px] font-[400] leading-[22.5px] text-[#1D1D1DB2]">+62 896 7311 2766</p>
              <p className="text-[18px] font-[400] leading-[22.5px] text-[#1D1D1DB2]">food@example.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="flex items-center justify-center py-[45px] px-[130px] bg-first">
        <p className="text-[16px] font-[400] leading-[20px]">© 2022 Let’sFood. ALL RIGHT RESERVED.</p>
      </div>

    </motion.div>
  )
}

export default Footer
