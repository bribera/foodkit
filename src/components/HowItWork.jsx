import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const HowItWork = () => {
  return (
    <div>
      <motion.div 
       variants={fadeIn("up", 0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.7}}
      className="py-[80px]">
        
        {/* textes */} 
             
        <div className="flex flex-col items-center justify-center">
            {/* titre */}
            <div className="">
                <p className="font-[500] text-[20px] lg:text-[22px] leading-[27.5px] text-second">How it works</p>
            </div>
            {/* sous-titre */}
            <div className="">
                <p className="font-[700] text-[28px] lg:text-[32px] leading-[40px] pb-[26px] pt-[7px]">What We Serve</p>
            </div>
            {/* texte sous-titre */}
            <div className="text-black/70 font-[500] w-[500px] lg:w-[611px] h-[56px] text-center leading-[27.5px] text-[18px] lg:text-[22px] pb-[32px]">
                <p className="">Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands.</p>
            </div>
        </div>
        {/* icons des livraisons */}
        <div className="flex flex-col grid-cols-3 gap-[30px] lg:gap-0 lg:grid pt-[50px] lg:pt-0">
            {/* easy order */}
            <div className="flex flex-col items-center justify-center">
                {/* image */}
                <div className="">
                    <Image alt="easy to order" width={180} height={180} src="/order.png" className="w-[140px] lg:w-fit lg:h-fit" />
                </div>
                {/* titre image */}
                <div className="pt-[24px] pb-[15px]">
                    <p className="font-[600] leading-[35px] text-[24px] lg:text-[28px]">Easy To Order</p>
                </div>
                {/* texte image */}
                <div className="font-[500] leading-[25px] text-[18px] lg:text-[20px]">
                    <p className="">You only order through the app</p>
                </div>
            </div>
            {/* fastest delivering */}
            <div data-aos="fade-up" className="flex flex-col items-center justify-center">
                {/* image */}
                <div className="">
                    <Image alt="easy to order" width={180} height={180} src="/delivery.png" className="w-[140px] lg:w-fit lg:h-fit"/>
                </div>
                {/* titre image */}
                <div className="pt-[24px] pb-[15px]">
                    <p className="font-[600] leading-[35px] text-[24px] lg:text-[28px]">Fastest Delivery</p>
                </div>
                {/* texte image */}
                <div className="font-[500] leading-[25px] text-[18px] lg:text-[20px]">
                    <p className="">Delivery will be on time</p>
                </div>
            </div>
            {/* best quality */}
            <div data-aos="fade-up" className="flex flex-col items-center justify-center">
                {/* image */}
                <div className="">
                    <Image alt="easy to order" width={180} height={180} src="/courier.png" className="w-[140px] lg:w-fit lg:h-fit"/>
                </div>
                {/* titre image */}
                <div className="pt-[24px] pb-[15px]">
                    <p className="font-[600] leading-[35px] text-[24px] lg:text-[28px]">Best Quality</p>
                </div>
                {/* texte image */}
                <div className="font-[500] leading-[25px] text-[18px] lg:text-[20px]">
                    <p className="">The best quality of food</p>
                </div>
            </div>
        </div>
      </motion.div>

    </div>
  )
}

export default HowItWork
