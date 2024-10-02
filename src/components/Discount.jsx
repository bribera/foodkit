import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

const Discount = () => {
  return (
    <div>
      <motion.div 
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className="py-[80px] px-[130px]">
        
        <div className='h-[338px] w-full relative'>
          <Image alt="food-image" width={400} height={400} src="/background.png" 
            className="object-cover w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]"/>
          <div className="absolute top-0 flex flex-col gap-[30px] items-center justify-center w-full h-full">
            {/* text */}
            <div className="">
              <p className="font-[700] text-white lg:w-[524px] h-[80px] text-center text-[22px] lg:text-[32px] leading-[40px]">Join our member and get discount up to 50%</p>
            </div>
            {/* bouton */}
            <div className="">
              <button type="button" className="bg-second flex justify-center text-[14px] font-[700] leading-[17.5px] py-[12px] px-[24px] rounded-[50px] gap-[16px] w-[125px] h-[40px] items-center">Sign up</button>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default Discount
