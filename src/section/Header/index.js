import React from 'react'
import Navbar from '../../component/Navbar'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import Image from 'next/image'

function Header() {
  return (
    <div >
      <Navbar/>
      <div className='mt-[76px] mx-[72px]' >
        <div className='grid grid-cols-2' >
          <div className='col-span-1 ml-[38px] mr-[76px] ' >
            <span className='block text-black font-medium text-[78px] font-SatoshiMedium' >
              Create ads for your business in minutes.
            </span>
            <span className='block mt-[34px] max-w-[337px] text-[19px] text-[#5A5A5A] font-SatoshiRegular mb-[63px]' >
              Our services give you the opportunity to craft a custom banner ad for Google Adwords, the advertising sites.
            </span>
            <div className='flex flex-row item-center gap-[26px]' >
              <a className='flex item-center justify-center w-[207px] h-[60px] bg-[#724FD8] group hover:border hover:border-[#724FD8] hover:bg-white cursor-pointer' >
                <span className=' font-SatoshiMedium text-white text-[17px] flex justify-center items-center group-hover:text-[#724FD8] ' >Create your ad now</span>
              </a>
              <a className='flex flex-row item-center h-[60px] cursor-pointer group' >
                <span className='flex items-center' ><AiOutlinePlayCircle size={30} /></span>
                <span className='flex items-center font-SatoshiRegular text-[17px] ml-[10px] group-hover:text-[#724FD8] ' >See how it works</span>
              </a>
            </div>
          </div>
          <div className='col-span-1' >
            <div className=' h-full relative' >
                <Image src="/images/header.png"  fill={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header