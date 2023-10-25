import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from "../public/assets/Bionutrihub.jpg";

import Link from 'next/link';
import { getCategories } from '@/services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/" className='flex gap-2'>
            <Image src={Logo} alt={"logo"} width={45} height={45} className='object-cover rounded-full'/>
            <span className="cursor-pointer font-bold text-4xl text-white">
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
    </div>
  );
};

export default Header;