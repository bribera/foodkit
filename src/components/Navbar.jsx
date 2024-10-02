
'use client'
import Image from 'next/image'
import Link from 'next/link'
import {React, useState, useEffect} from 'react'
import { CiSearch } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { IoExitOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import { usePathname, } from 'next/navigation'


 const menu =[
    {
        nom : "Home",
        path: "/",
    },
    {
        nom : "Menu",
        path: "/menu",
    },
    {
        nom : "About ",
        path: "/about",
    },
    {
        nom : "Contact",
        path: "/contact",
    },
 ]

 
 const Navbar = () => {


    const router = useRouter();
    const pathname = usePathname()

    const [haut, setHaut] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 40) {
             setHaut(true)
            } else {
                setHaut(false)
            }
        }
        

        window.addEventListener("scroll", handleScroll)
        
        return(() => {
            window.removeEventListener("scroll", handleScroll)
        })
    }, [])


  return (

        <div className="px-[65px] bg-first lg:px-[130px] lg:py-[28px] h-full">
            <div className={`haut ?
                "hidden fixed top-0  bg-first xl:flex items-center justify-between   w-[80vw] " 
                :"hidden fixed bottom-0  bg-first xl:flex transition duration-300 items-center justify-between w-[80vw]"`}>              

                    {/* logo */}
                    <div className="">
                        <Link href="/">
                            <Image src="/logo.png" alt="Logo" width={400} height={400} className=" w-[210px] h-[px] lg:w-fit lg:h-fit "/>
                        </Link>
                    </div>

                    {/* liste de menu */}
                    <nav className="items-center justify-center hidden w-full lg:flex ">
                        <div className="flex items-center  gap-x-[159px] ">
                        {menu.map((item,id) => (
                            <ul className="flex items-center justify-between" key={id}>
                                <Link href={item.path} className={`${item.path === pathname && 'font-black click'} relative flex justify-center flex-col xl:justify-start items-center group cursor-pointer transition-all duration-300`}>                       
                                        <span className="text-[22px] font-[500]">{item.nom}</span>                                       
                                </Link>
                            </ul>
                        )
                            )}
                        </div>
                    </nav>

                    {/* les icons */}
                    <div className="">
                        <div className=" flex justify-between items-center gap-[32px]">
                            {/* icon search */}
                            <div className="">
                                <CiSearch className="text-[24px] hidden lg:flex" />
                            </div>
                            {/* icon boutique */}
                            <div className="relative hidden lg:flex">
                                <span className="absolute -right-3 -top-2 flex justify-center text-center bg-second w-[24px] h-[24px] p-[2px] rounded-[50%]"> 2</span>
                            <SlBasketLoaded className="text-[24px]"/>
                            </div>
                            {/* button */}
                            <div className="">
                                <button className="bg-second flex py-[12px] px-[24px] rounded-[50px] gap-[16px] w-[125px] h-[40px] items-center hover:py-[26px] hover:px-[16px] hover:transition hover:transition-all hover:duration-500 hover:ease-in-out hover:drop-shadow-md hover:shadow-3xl hover:bg-[#fcc332]">
                                    <div  className=""> <IoExitOutline className=""/></div> 
                                    <div className="text-[14px] font-[700] leading-[16.94px]" >Sign in</div>                       
                                </button>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>

    
  )
}

export default Navbar
