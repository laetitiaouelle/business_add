import React from 'react'
import Image from 'next/image'

function Feature2
() {
  return (
    <div className='mx-[135px] mt-[140px]' >
        <div className=' px-12 py-14 bg-[#F4F2FA] ' >
          <div className='grid grid-cols-2 ' >
            <div className='col-span-1 '>
              <div className=' h-full relative' >
                  <Image src="/images/feature2.png" fill={true} />
              </div>
            </div>
            <div className='col-span-1 ml-[83px] ' >
              <span className='block text-black font-medium text-[56px] font-SatoshiMedium max-w-[425px]' >
                Your hands can resize anything.
              </span>
              <span className='block mt-[18px] max-w-[337px] text-[19px] text-[#5A5A5A] font-SatoshiRegular mb-[34px]' >
                Upload your image, choose a custom size or choose from hundreds or pre-defined sizes. They work great for social media, cover photos, ads, flyers and much more.
              </span>
              <a className='flex item-center justify-center w-[158px] h-[60px] bg-black group hover:border hover:border-black hover:bg-transparent cursor-pointer' >
                <span className=' font-SatoshiMedium text-white text-[17px] flex justify-center items-center group-hover:text-black ' >Try it for Free</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Feature2
