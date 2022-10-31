import React, { useState }  from 'react'



function Pricing() {

  const [isMonth, setisMonth] = useState(false)
  const setIsMonthly = ()=>setisMonth(!isMonth)  

  return (
    <div className='mx-[135px]  mt-[140px]'>
      <div className='w-full mb-[34px] ' >
        <span className='flex item-center justify-center font-SatoshiMedium text-black text-[56px] ' >
          Choose your plan
        </span>
      </div>
      <div className='w-full'>
        <span className='flex item-center justify-center' >
            <a className=' w-[263px] h-12 bg-[#EEEDF0] flex items-center justify-between rounded-[42px] px-1 relative' >
                <span className='h-10 flex items-center justify-center rounded-[42px] w-[162px] absolute left-0 '>
                    Monthly
                </span>
                <span className='h-10 flex items-center justify-center bg-black text-white rounded-[42px] w-[162px] absolute right-0 '>
                    Yearly Save 50%
                </span>
            </a>
        </span>
      </div>
    </div>
  )
}

export default Pricing