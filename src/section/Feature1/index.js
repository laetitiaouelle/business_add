import React from 'react'
import Image from 'next/image'

function Feature1() {
  return (
    <div className='mx-[135px] bg-[#FFF6D9] mt-[140px] ' >
      <div className=' px-12 py-14 ' >
        <div className='grid grid-cols-2' >
          <div className='col-span-1' >
            <span className='block text-black font-medium text-[56px] font-SatoshiMedium ' >
              CGo from a blank mind to brilliant ideas
            </span>
            <span className='block mt-[18px] max-w-[337px] text-[19px] text-[#5A5A5A] font-SatoshiRegular mb-[34px]' >
              You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal.
            </span>
            <a className='flex item-center justify-center w-[196px] h-[60px] bg-black group hover:border hover:border-black hover:bg-transparent cursor-pointer' >
              <span className=' font-SatoshiMedium text-white text-[17px] flex justify-center items-center group-hover:text-black ' >Explore Templates</span>
            </a>
          </div>
          <div className='col-span-1' >
            <div className=' h-full relative' >
                <Image src="/images/feature1.png"  fill={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature1