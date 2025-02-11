import React from 'react'

function Footer() {
  return (
    <>
    <div className='grid place-items-center text-center px-4 py-16'>
        <p className='text-md font-Montserrat font-light text-secondery pb-2'>GET STARTED</p>
        <h1 className='text-4xl font-Montserrat font-medium text-white italic pb-5'>Embrace <span className='font-semibold font-workSans '>the new era of</span> outbound.</h1>
        <p className='text-md text-gray-300 font-light sm:max-w-[550px]'>Wizia lets you train, activate, and optimize aiDRs. Take your outbound to new levels of performance and efficiency.</p>
        <button className="bg-secondery text-black px-[18px] py-[16px] rounded-full flex flex-row items-center gap-1 cursor-pointer hover:shadow-[0px_0px_10px] hover:shadow-secondery/70 mt-4">
            Sign Up for the Beta
            <img src="img2.png" alt="" />
        </button>
    </div>

    <div className='sm:flex sm:flex-row flex-col justify-between bg-[#07292F] sm:px-16 px-0 space-y-5 sm:space-y-0 py-8 '>
    <img className=' mx-auto sm:mx-0 h-auto' src="logo2.png" alt="" />
    <p className='text-gray-500 text-center sm:text-start'>Copyright © 2023 Wizia. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer