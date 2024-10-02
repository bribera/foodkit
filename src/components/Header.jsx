import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

 

const Header = () => {
  return (

    <div className=" relative bg-first px-[130px] py-[28px] mt-[60px]">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-[35px] items-center justify-between w-full ">
          {/* text */}
          <motion.div 
             variants={fadeIn("right", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
            className="flex-1 w-full lg:justify-start justify-center items-center lg:items-start flex flex-col gap-y-[21px]">
            
            {/* titre */}
            <h1 className=" text-[38px] font-[600] text-center lg:text-start lg:text-[48px] leading-[60px] w-[480px] h-[120px]">
              Be The Fastest In Delivery Your <span className="text-second"> Food </span>
            </h1>
            {/* sous-titre */}
            <p className="font-[400] text-[16px] text-center lg:text-start lg:text-[18px] leading-[22.5px] w-[370px] h-[46px] text-black/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
             </p>
            {/* button */}
            <div className="">
              <button className="bg-second flex py-[12px] px-[24px] rounded-[50px] gap-[16px] w-[125px] h-[40px] items-center hover:py-[26px] hover:px-[16px] hover:transition hover:transition-all hover:duration-500 hover:ease-in-out hover:drop-shadow-md hover:shadow-3xl hover:bg-[#fcc332]">
                  <p className="text-[14px] text-black font-[700] leading-[16.94px] inter" >Get Started</p>                       
              </button>
            </div>
          </motion.div>

          {/* image*/}
          <motion.div 
             variants={fadeIn("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
            className="relative flex-1 w-full h-full">
              <Image alt="Les plats" src="/img-hero.png" width={400} height={400} className="w-full h-full" />
              {/* ellipse 4 */}
              <div className="absolute -left-16 bottom-[32%]">
                <Image alt="ellipses" src="/circle4.png" width={38} height={38}  />
              </div>
              {/* ellipse 5 */}
              <div className="absolute left-10 lg:left-32 bottom-[55%]">
                <Image alt="ellipses" src="/circle5.png" width={15} height={15}  />
              </div>
              {/* ellipse 6 */}
              <div className="absolute right-2 lg:right-20 bottom-[45%]">
                <Image alt="ellipses" src="/circle6.png" width={60} height={60}  />
              </div>
              {/* ellipse 7 */}
              <div className="absolute top-0 lg:left-20">
                <Image alt="ellipses" src="/circle7.png" width={48} height={48}  />
              </div>
          </motion.div>

          {/* les layers */}
          <div className="absolute -left-2 bottom-2 lg:bottom-10 flex flex-col gap-[5px]">
              <Image alt="Les layers" src="/layer1.png" width={195} height={107} className="w-[150px] lg:w-fit"  />
              <Image alt="Les layers" src="/layer2.png" width={195} height={107} className="w-[150px] lg:w-fit"  />
          </div>
      </div>
    </div>
    
  
  )
}

export default Header
