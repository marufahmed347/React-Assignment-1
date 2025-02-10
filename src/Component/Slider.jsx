import React, { useState } from 'react'

function Slider() {

    const Slide=[
        {
            id:"1",
            heading:"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            nam:"John Doe",
            bio:"Chief Strategy Officer @ Company"
        },
        {
            id:"2",
            heading:"Consectetur adipiscing elit, Nunc vulputate libero et velit interdum. ac aliquet odio mattis, Qorem ipsum dolor sit amet. ",
            nam:"Doe John",
            bio:"Company Chief Strategy @ Officer"
        },
        {
            id:"3",
            heading:"Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Qorem ipsum dolor sit amet, Consectetur adipiscing elit.",
            nam:"Jhon Dae",
            bio:"Strategy Officer Chief @ trategy"
        },
    ]

    const [currentIndex, setCurrenIndex]= useState(0)

    const previousSlide = ()=>{
        setCurrenIndex((prevIndex)=>(prevIndex === 0 ? Slide.length -1 : prevIndex -1 ));
    }

    const nextSlide = ()=>{
        setCurrenIndex((prevIndex) =>(prevIndex === Slide.length - 1 ? 0 : prevIndex + 1));
    }


    const { heading, nam, bio} =Slide[currentIndex]

  return (
    <>
    <section className='max-w-[1440px] py-10 mx-auto bg-primary mt-10'>

    <img className='h-auto object-cover mx-auto pb-10' src='img20.png' alt="" />
        <div className='grid grid-cols-12'>

            <div className='grid col-span-3 mx-auto'>
                <button onClick={previousSlide}>
                <img src="img22.png" alt="" />
                </button>
            </div>

            <div className='grid col-span-6 mx-auto'>
            
            <p className='text-xl text-[#FFFFFF] font-light text-center'>{heading}</p>
            <h2 className='text-md font-semibold text-[#0FF1F6] text-center pt-5'>{nam}</h2>
            <p className='text-[#96ACAF] font-regular text-center'>{bio}</p>
            </div>

            <div className='grid col-span-3 mx-auto'>
                <button onClick={nextSlide} className='me-0'>
                <img src="img23.png" alt="" />
                </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Slider