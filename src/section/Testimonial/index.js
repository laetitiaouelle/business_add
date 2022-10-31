import React from 'react'
import Image from 'next/image'

function Testimonial() {
  return (
    <div className='mx-[135px]  mt-[140px] ' >
      <div className='w-full mb-12' >
        <span className='flex item-center justify-center font-SatoshiMedium text-black text-[56px] ' >
          Customer Feedback
        </span>
      </div>
      <div className='my-12' >
        <div className='flex item-center justify-between ' >
            <a className='relative w-[70px] h-[70px]' >
              <Image src="/images/aleft.png"  fill={true} />
            </a>
            <div className='max-w-[740px]' >
              <span className=' font-SatoshiRegular text-[#5A5A5A] text-2xl text-center block ' >
                Awesome App! Easy to use, it has a lot of options to design whatever you need, it is professional and fun. I was very successful creating my profile using desygner which gave me unbelievable reach and appreciation.
              </span>
            </div>
            <a className='relative w-[70px] h-[70px]' >
              <Image src="/images/aright.png"  fill={true} />
            </a>
        </div>
      </div>
      <div className='flex item-center justify-center' >
        <div className='flex flex-row item-center' >
          <span className='block w-[72px] h-[72px] relative' >
            <Image src="/images/ceo.png" fill={true} />
          </span>
          <div className='flex flex-col ml-6 ' >
            <span className='text-black font-SatoshiMedium text-2xl mb-2' >Jason L. Guidry</span>
            <span className='text-[#707070] font-SatoshiRegular text-[19px] mb-2 ' >Jason L. Guidry</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Testimonial