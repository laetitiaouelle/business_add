import React from 'react'
import Image from 'next/image'
import {FiChevronDown} from 'react-icons/fi'

function Navbar() {
  return (
    <div className=' px-20 mt-[30px] h-12 w-full flex flex-row items-center justify-between ' >
      <div className='flex flex-row items-center justify-between gap-32' >
        <span className='block w-20 h-6 relative cursor-pointer' >
          <Image src="/images/logo.png" layout='fill' fill={true} />
        </span>
        <div className='' >
          <nav>
            <ul className=' list-none flex gap-8 flex-row items-center ' >
              <li className='inline group' >
                <a className='group-hover:text-[#000] text-[#5A5A5A] text-[17px] cursor-pointer ' >
                  <span className='font-SatoshiRegular' >Home</span>
                </a>
              </li>
              <li className='inline group' >
                <a className='group-hover:text-[#000] text-[#5A5A5A] text-[17px] cursor-pointer flex flex-row item-center justify-between  ' >
                  <span className='font-SatoshiRegular' >
                    Features
                  </span>
                  <span className='flex items-center justify-center ml-[7px] ' >
                    <FiChevronDown color="#5A5A5A" size={20} />
                  </span>
                </a>
              </li>
              <li className='inline group' >
                <a className='group-hover:text-[#000] text-[#5A5A5A] text-[17px] cursor-pointer flex flex-row item-center justify-between  ' >
                  <span className='font-SatoshiRegular'>
                    Templates
                  </span>
                  <span className='flex items-center justify-center ml-[7px] ' >
                    <FiChevronDown color="#5A5A5A" size={20} />
                  </span>
                </a>
              </li>
              <li className='inline group' >
                <a className='group-hover:text-[#000] text-[#5A5A5A] text-[17px] cursor-pointer flex flex-row item-center justify-between  ' >
                  <span className='font-SatoshiRegular' >
                    Learn
                  </span>
                  <span className='flex items-center justify-center ml-[7px] ' >
                    <FiChevronDown color="#5A5A5A" size={20} />
                  </span>
                </a>
              </li>
              <li className='inline group' >
                <a className='group-hover:text-[#000] text-[#5A5A5A] text-[17px] cursor-pointer ' >
                  <span className='font-SatoshiRegular' >Pricing</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className=' w-[234px] flex flex-row ' >
        <a className=' cursor-pointer flex item-center justify-center items-center w-[100px]  ' >
          <span className=' block text-black text-[17px] font-SatoshiRegular ' >
            Log in
          </span>
        </a>
        <a className=' cursor-pointer  bg-black w-[120px] font-SatoshiRegular h-12  flex items-center justify-center group hover:border hover:border-black hover:bg-white  ' >
          <span className=' block text-white text-[17px] group-hover:text-black ' >
            Sign up
          </span>
        </a>
      </div>

    </div>
  )
}

export default Navbar