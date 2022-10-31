import React from 'react'
import Image from 'next/image'

function feature3() {
  return (
    <div className='mx-[135px] mt-[140px]' >
         <div className=' px-12 py-14 bg-[#FFF6D9] ' >
            <div className='grid grid-cols-2' >
              <div className='col-span-1' >
                <span className='block text-black font-medium text-[56px] font-SatoshiMedium max-w-[425px]' >
                  Background Remove with a Single Click!
                </span>
                <span className='block mt-[18px] max-w-[337px] text-[19px] text-[#5A5A5A] font-SatoshiRegular mb-[34px]' >
                  ABQ makes removing image backgrounds as easy as clicking a button, so you can extract the perfect image.
                </span>
                <a className='flex item-center justify-center w-[284px] h-[60px] bg-black group hover:border hover:border-black hover:bg-transparent cursor-pointer' >
                  <span className=' font-SatoshiMedium text-white text-[17px] flex justify-center items-center group-hover:text-black ' >Explore Background Remover</span>
                </a>
              </div>
              <div className='col-span-1' >
                <div className=' h-full relative' >
                    <Image src="/images/feature3.png"  fill={true} />
                </div>
              </div>
            </div>
         </div>
    </div>
  )
}

export default feature3