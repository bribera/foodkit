import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
// framer motion
import {motion} from 'framer-motion'
// variant
import {fadeIn} from '../variants'

const MenuList = () => {
  return (
    <div>
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className="py-[80px] px-[130px] flex flex-col gap-[20px]">
           
        {/* textes */}

        <motion.div 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}

            className="flex flex-col items-center justify-center">
           
            {/* titre */}
            <div className="">
                <p className="font-[500] text-[20px] lg:text-[22px] leading-[27.5px] text-second">Our menu</p>
            </div>
            {/* sous-titre */}
            <div className="">
                <p className="font-[700] text-[28px] lg:text-[32px] leading-[40px] pb-[26px] pt-[7px]">Our Popular Menu</p>
            </div>
            {/* texte sous-titre */}
            <div className="text-black/70 font-[500] w-[450px] lg:w-[518px] h-[56px] leading-[27.5px] text-[18px] lg:text-[22px] pb-[32px]">
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            </div>
        </motion.div>

        {/* menu list */}

        <div className=" relative flex flex-col lg:grid grid-cols-4 gap-[24px] items-center pt-[30px] lg:pt-0">
           
            {/* ramen menu card*/}
            
            <motion.div 
                 variants={fadeIn("up", 0.8)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.7}}
                className="bg-[#F1F1F1] shadow-md shadow-[#000000]/15 rounded-[10px] flex flex-col items-center justify-center ">
                
                {/* image */}

                <div className="">
                    <Image alt="easy to order" width={230} height={230} src="/ramen.png" className="w-[180px] lg:w-fit lg:h-fit" />
                </div>

                {/* caractéristiques */}

                <div className="w-full bg-white rounded-t-l-[70px] rounded-t-r-[70px] p-[22px]">                  
                    {/* name et price */}
                    <div className="flex flex-col items-center justify-center">                     
                       
                        {/* name food */}
                        <div className=" pb-[5px]">
                            <p className="font-[500] leading-[25px] text-[18px] lg:text-[20px]">Ramen</p>
                        </div>                       
                        {/* texte image */}
                        <div className="font-[400] leading-[22.5px] text-[16px] lg:text-[18px] pb-[13px]">
                            <p className="">lorem ipsum</p>
                        </div>
                    </div>

                    {/* price et heart*/}

                    <div className="flex justify-between">
                        {/* price */}
                        <div className="">
                            <p className="font-[500] text-[20px] lg:text-[22px] leading-[27.5px] text-black">$20.2</p>
                        </div>
                        {/* coeur icon */}
                        <div className="text-second text-[19px] lg:text-[21px]">
                            <FaHeart />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* salad menu card*/}

            <motion.div 
                 variants={fadeIn("up", 0.7)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.7}}
                className="bg-[#F1F1F1] shadow-md shadow-[#000000]/15 rounded-[10px] flex flex-col items-center justify-center ">
               
                {/* image */}

                <div className="">
                    <Image alt="easy to order" width={230} height={230} src="/salad.png" className="w-[180px] lg:w-fit lg:h-fit"/>
                </div>
                
                {/* caractéristiques */}

                <div className="w-full bg-white rounded-t-l-[70px] rounded-t-r-[70px] p-[22px]">
                    {/* name et price */}
                    <div className="flex flex-col items-center justify-center">                     
                        {/* name food */}
                        <div className=" pb-[5px]">
                            <p className="font-[500] leading-[25px] text-[18px] lg:text-[20px]">Salad</p>
                        </div>
                        {/* texte image */}
                        <div className="font-[400] leading-[22.5px] text-[16px] lg:text-[18px] pb-[13px]">
                            <p className="">lorem ipsum</p>
                        </div>
                    </div>
                    {/* price et heart*/}
                    <div className="flex justify-between">
                        {/* price */}
                        <div className="">
                            <p className="font-[500] text-[20px] lg:text-[22px] leading-[27.5px] text-black">$20.2</p>
                        </div>
                        {/* coeur icon */}
                        <div className="text-[#1D1D1DB2] text-[19px] lg:text-[21px]">
                            <FaHeart />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* roti bakar menu card*/}

            <motion.div 
                 variants={fadeIn("up", 0.4)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.7}}
                className="bg-[#F1F1F1] shadow-md shadow-[#000000]/15 rounded-[10px] flex flex-col items-center justify-center ">
                
                {/* image */}

                <div className="">
                    <Image alt="easy to order" width={230} height={230} src="/bakar.png" className="w-[180px] lg:w-fit lg:h-fit"/>
                </div>
                
                {/* caractéristiques */}

                <div className="w-full bg-white rounded-t-l-[70px] rounded-t-r-[70px] p-[22px]">
                    {/* name et price */}
                    <div className="flex flex-col items-center justify-center">                     
                        {/* name food */}
                        <div className=" pb-[5px]">
                            <p className="font-[500] leading-[25px] text-[18px] lg:text-[20px]">Roti bakar</p>
                        </div>
                        {/* texte image */}
                        <div className="font-[400] leading-[22.5px] text-[16px] lg:text-[18px] pb-[13px]">
                            <p className="">lorem ipsum</p>
                        </div>
                    </div>
                    {/* price et heart*/}
                    <div className="flex justify-between">
                        {/* price */}
                        <div className="">
                            <p className="font-[500] text-[20px] lg:text-[22px] leading-[27.5px] text-black">$20.2</p>
                        </div>
                        {/* coeur icon */}
                        <div className="text-[#1D1D1DB2] text-[19px] lg:text-[21px]">
                            <FaHeart />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* spagetti menu card */}

            <motion.div 
                 variants={fadeIn("up", 0.8)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.7}}
                className="bg-[#F1F1F1] shadow-md shadow-[#000000]/15 rounded-[10px] flex flex-col items-center justify-center ">
                
                {/* image */}
                
                <div className="">
                    <Image alt="easy to order" width={230} height={230} src="/spagaetti.png" className="w-[180px] lg:w-fit lg:h-fit"/>
                </div>
                
                {/* caractéristiques */}
                
                <div className="w-full bg-white rounded-t-l-[70px] rounded-t-r-[70px] p-[22px]">
                    {/* name et price */}
                    <div className="flex flex-col items-center justify-center">                     
                        {/* name food */}
                        <div className=" pb-[5px]">
                            <p className="font-[500] leading-[25px] text-[18px] lg:text-[20px]">Spagetti</p>
                        </div>
                        {/* texte image */}
                        <div className="font-[400] leading-[22.5px] text-[16px] lg:text-[18px] pb-[13px]">
                            <p className="">lorem ipsum</p>
                        </div>
                    </div>
                    {/* price et heart*/}
                    <div className="flex justify-between">
                        {/* price */}
                        <div className="">
                            <p className="font-[500] text-[20px] lg:text-[22px] leading-[27.5px] text-black">$20.2</p>
                        </div>
                        {/* coeur icon */}
                        <div className="text-[#1D1D1DB2] text-[19px] lg:text-[21px]">
                            <FaHeart />
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* bouton more menu */}
            <motion.div 
                 variants={fadeIn("up", 0.9)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.7}}
                className="absolute top-0 flex items-center justify-center w-full h-full ">                    
                    <button type="button" className="bg-second flex justify-center text-[14px] font-[700] leading-[17.5px] py-[12px] px-[24px] rounded-[50px] gap-[16px] w-[125px] h-[40px] items-center">More menu</button>           
            </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default MenuList
