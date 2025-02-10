import React from 'react'

function Email() {

    const EmailData=[
        {
            image:"img15.png",
            p:"Quick to ramp"
        },
        {
            image:"img15.png",
            p:"Easy to optimize"
        },
        {
            image:"img15.png",
            p:"Quick to scale up"
        },
        {
            image:"img15.png",
            p:"Works with all your existing tools"
        },
    ]

  return (
    <>
        <section className='bg-primary max-w-[1400px]'>

           <div className=' grid grid-cols-12 bg-[#07292F] sm:mx-10 mx-5 rounded-xl'>

           <div className='grid sm:col-span-4 col-span-12'>
                <img src="mg.png" alt="" />
            </div>

            <div className='grid sm:col-span-8 col-span-12  sm:p-20 p-5'>
                <h1 className='text-2xl sm:text-3xl text-white mb-1'>Train your aiDR on your...</h1>
                <h1 className='text-secondery text-2xl sm:text-3xl'>prefered email st|</h1>
                <p className='text-gray-500 text-lg md:w-90 mb-8 mt-5'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    {
                        EmailData.map((even)=>(
                            <div key={even.id} className='flex gap-1 items-center'>
                                <img className='h-auto ' src={even.image} alt="" />
                                <p className='text-secondery text-md'>{even.p}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
           </div>
        </section>
    </>
  )
}

export default Email;