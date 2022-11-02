import React, { useState }  from 'react'
import {BsCheck2} from 'react-icons/bs'



function Pricing() {

  const [isMonth, setisMonth] = useState(false)
  const setIsMonthly = ()=>setisMonth(!isMonth)  

  return (
    <div className='mx-[135px]  mt-[140px]'>
      <div className='w-full mb-[34px]' >
        <span className='flex item-center justify-center font-SatoshiMedium text-black text-[56px] ' >
          Choose your plan
        </span>
      </div>
      <div className='w-full mb-[46px]'>
        <span className='flex item-center justify-center' >
            <a className=' w-[263px] h-12 bg-[#EEEDF0] flex items-center justify-between rounded-[42px] px-1 relative' >
                <span className='h-10 flex items-center justify-center rounded-[42px] w-[114px]'>
                    Monthly
                </span>
                <span className='h-10 flex items-center justify-center bg-black text-white rounded-[42px] w-[162px]'>
                    Yearly Save 50%
                </span>
            </a>
        </span>
      </div>
      <div className='grid grid-cols-3 gap-[30px]' >
          <div className='col-span-1' >
            <div className='w-full h-[567px] border border-[#A586FF33] p-8 ' >
                <span className=' font-SatoshiMedium text-black block mb-[18px] text-[34px] ' >Free</span>
                <span className=' font-SatoshiRegular text-[15px] text-[#5A5A5A] block mb-8 ' >
                  Our software allows you to create graphics instantly. It's free and easy to use.
                </span>
                <div className='flex flex-row items-end justify-start mb-[38px] ' >
                  <span className='block font-SatoshiBold font-bold text-black text-[44px]' > $0 </span>
                  <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                    /month
                  </span>
                </div>
                <div className='w-full mb-[36px]' >
                    <a className='h-[51px] flex justify-center items-center bg-[#724FD8] text-white font-bold font-SatoshiBold text-[15px] ' >
                      Get Free
                    </a>
                </div>
                <div className='' >
                    <div className='flex items-center flex-row mb-[15px]' >
                          <span className='block mr-[10px] ' >
                              <BsCheck2 color='#5A5A5A' size={22} />
                          </span>
                          <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                            10K+ design templates
                          </span>
                    </div>
                    <div className='flex items-center flex-row mb-[15px]' >
                          <span className='block mr-[10px] ' >
                              <BsCheck2 color='#5A5A5A' size={22} />
                          </span>
                          <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                            10K+ creative assets
                          </span>
                    </div>
                    <div className='flex items-center flex-row' >
                          <span className='block mr-[10px] ' >
                              <BsCheck2 color='#5A5A5A' size={22} />
                          </span>
                          <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                            Brand Kit with colors, logos, and fonts
                          </span>
                    </div>
                </div>
            </div>
          </div>
          <div className='col-span-1' >
            <div className='w-full h-[567px] bg-[#724FD8] border border-[#A586FF33] p-8 ' >
                <span className=' font-SatoshiMedium text-white block mb-[18px] text-[34px] ' >Pro+</span>
                <span className=' font-SatoshiRegular text-[15px] text-[#fff] block mb-8 ' >
                  Our tools are easy to use and will help you create a professional, beautiful design quickly.
                </span>
                <div className='flex flex-row items-end justify-start mb-[38px] ' >
                  <span className='block font-SatoshiBold font-bold text-white text-[44px]' > $5 </span>
                  <span className='font-SatoshiRegular text-[15px] text-[#fff] block' >
                    /month
                  </span>
                </div>
                <div className='w-full mb-[36px]' >
                    <a className='h-[51px] flex justify-center items-center text-[#724FD8] bg-white font-bold font-SatoshiBold text-[15px] ' >
                      Get Free
                    </a>
                </div>
                <div className='' >
                    <div className='flex items-center flex-row mb-[15px]' >
                        <span className='block mr-[10px]' >
                            <BsCheck2 color='#fff' size={22} />
                        </span>
                        <span className='font-SatoshiRegular text-[15px] text-white block' >
                          50K+ design templates
                        </span>
                    </div>
                    <div className='flex items-center flex-row mb-[15px]' >
                        <span className='block mr-[10px]' >
                            <BsCheck2 color='#fff' size={22} />
                        </span>
                        <span className='font-SatoshiRegular text-[15px] text-white block' >
                          100K+ design templates
                        </span>
                    </div>
                    <div className='flex items-center flex-row mb-[15px]' >
                        <span className='block mr-[10px]' >
                            <BsCheck2 color='#fff' size={22} />
                        </span>
                        <span className='font-SatoshiRegular text-[15px] text-white block' >
                          Brand Kit with colors, logos, and fonts
                        </span>
                    </div>
                    <div className='flex items-center flex-row mb-[15px]' >
                        <span className='block mr-[10px]'>
                            <BsCheck2 color='#fff' size={22} />
                        </span>
                        <span className='font-SatoshiRegular text-[15px] text-white block' >
                          Background removal feature
                        </span>
                    </div>
                    <div className='flex items-center flex-row' >
                        <span className='block mr-[10px]' >
                            <BsCheck2 color='#fff' size={22} />
                        </span>
                        <span className='font-SatoshiRegular text-[15px] text-white block' >
                          10 GB storage for files and projects
                        </span>
                    </div>
                </div>
            </div>
          </div>
          <div className='col-span-1' >
            <div className='w-full h-[567px] border border-[#A586FF33] p-8 ' >
                <span className=' font-SatoshiMedium text-black block mb-[18px] text-[34px] ' >Business</span>
                <span className=' font-SatoshiRegular text-[15px] text-[#5A5A5A] block mb-8 ' >
                  You can create beautiful designs by using our powerful and simple design tools.
                </span>
                <div className='flex flex-row items-end justify-start mb-[38px] ' >
                  <span className='block font-SatoshiBold font-bold text-black text-[44px]' > $9 </span>
                  <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                    /month
                  </span>
                </div>
                <div className='w-full mb-[36px]' >
                    <a className='h-[51px] flex justify-center items-center bg-[#724FD8] text-white font-bold font-SatoshiBold text-[15px] ' >
                      Get Business
                    </a>
                </div>
                <div className='' >
                    <div className='flex items-center flex-row mb-[15px]' >
                          <span className='block mr-[10px] ' >
                              <BsCheck2 color='#5A5A5A' size={22} />
                          </span>
                          <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                            100K+ design templates
                          </span>
                    </div>
                    <div className='flex items-center flex-row mb-[15px]' >
                          <span className='block mr-[10px] ' >
                              <BsCheck2 color='#5A5A5A' size={22} />
                          </span>
                          <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                            1M+ design templates
                          </span>
                    </div>
                    <div className='flex items-center flex-row mb-[15px]' >
                          <span className='block mr-[10px] ' >
                              <BsCheck2 color='#5A5A5A' size={22} />
                          </span>
                          <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                            Brand Kit with colors, logos, and fonts
                          </span>
                    </div>
                    <div className='flex items-center flex-row mb-[15px]' >
                          <span className='block mr-[10px] ' >
                              <BsCheck2 color='#5A5A5A' size={22} />
                          </span>
                          <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                            Background removal feature
                          </span>
                    </div>
                    <div className='flex items-center flex-row' >
                          <span className='block mr-[10px] ' >
                              <BsCheck2 color='#5A5A5A' size={22} />
                          </span>
                          <span className='font-SatoshiRegular text-[15px] text-[#5A5A5A] block' >
                            15 GB storage for files and projects
                          </span>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Pricing