
'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { CiSearch } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { IoExitOutline } from "react-icons/io5";
import { usePathname, useRouter} from 'next/navigation'


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

    const [haut, setHaut] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 680) {
                setHaut(true);
            } else {
                setHaut(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (

        <div className="">
            <div className= {`fixed top-0 px-[65px] lg:px-[130px] lg:py-[20px] w-full z-[99] items-center justify-between transition duration-300 ${haut ? "bg-white" : "bg-first"} xl:flex`}>              

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
                                <Link href={item.path} className={`${item.path === pathname && 'font-black text-second click'} relative flex justify-center flex-col xl:justify-start items-center group cursor-pointer transition-all duration-300`}>                       
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
