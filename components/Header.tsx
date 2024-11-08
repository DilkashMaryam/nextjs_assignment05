import React from 'react'
import {Rye} from "next/font/google"
const rye = Rye({ subsets: ['latin'], weight: '400' });

const Header = () => {
  return (
    <div className='w-[1741.06px] h-[135.01px] ml-[-127.27px] bg-[#A29875] inline-flex'>
          <h1 className='w-[63.52px] h-[70.35px] mt-[23.22px] ml-[56.76] text-[#FFFFFF]'></h1>
          <h1 className='w-[172px] h-[83px] mt-[27.67] ml-[125.32px] font-[Rye] font-normal  text-[66.78px] leading-[83.48px] text-[#FFFFFF]'>MANZZARI</h1>
            
    </div>
  )
}

export default Header;
