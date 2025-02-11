import React from 'react'

function Improvement() {

  const CardData= [
    {
      id:1,
      img:'32%.png',
      para:'Improvement in Open Rates'
    },
    {
      id:2,
      img:'75%.png',
      para:'Improvement in Ramp Time'
    },
    {
      id:3,
      img:'35%.png',
      para:'Improvement in Meetings Booked'
    },
  ]

  return (
    <>
    <section className='my-10'>
        <div className='sm:bg-[url("/img45.jpg")] bg-no-repeat bg-cover sm:bg-right bg-[url("/img44.jpg")] bg-bottom sm:mx-10 mx-5 rounded-xl sm:p-16 p-8'>
            <div>
            <h1 className='text-[#FFFFFF] text-2xl font-Montserrat font-semibold md:max-w-[451px] text-start mt-2 mb-1'>Allocate effort where your reps make an inpact.</h1>
            <h1 className='text-secondery text-2xl font-Montserrat font-medium italic text-start mb-2'>Let us handle the rest.</h1>
            <p className='text-[#FFFFFF] font-light text-md md:max-w-[482px] text-start mb-20'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 lg:max-w-[500px] mb-2 gap-5'>
              {
                CardData.map((car)=>(
                  <div key={car.id}>
                    <img className='object-cover h-auto mb-5' src={car.img} alt="" />
                    <p className='text-[#E9EEF1] font-Montserrat font-light'>{car.para}</p>
                  </div>
                ))
              }
            </div>
        </div>
    </section>
    </>
  )
}

export default Improvement;