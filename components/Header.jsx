import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logos from "../public/assets/Logos.jpg";

import Link from 'next/link';
import { getCategories } from '@/services';

// React Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 relative">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/" className='flex gap-2'>
            <Image src={Logos} alt={"logo"} width={46} height={50} className='object-cover rounded-full tablet:w-[30px] tablet:h-[30px]'/>
            <span className="cursor-pointer tablet:text-xl font-bold text-4xl text-white">
              Bionutrihub
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
    </div>
  </div>
  {/* smaller screen */}
  <div className="absolute tablet:absolute tablet:right-0 top-[40px] right-0 z-10 hidden tablet:block">
         {toggle 
          ? <AiOutlineClose onClick={() => setToggle(false)} className="toggle_menu"/>
          : <AiOutlineMenu onClick={() => setToggle(true)} className="toggle_menu"/>
        }
        {toggle && (
           <div className='flex justify-center flex-col gap-4 items-start mt-16 bg-blue-700 px-4 py-4 rounded-sm slideInDown h-screen w-full'>
               {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
           </div>
        )}
    </div>
    {/* end nav smaller screen */}
</div>
);
};

export default Header;