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
        <section>

           <div className=' sm:bg-[url("/img41.jpg")] bg-no-repeat bg-cover sm:bg-left bg-[url("/img44.jpg")] bg-bottom sm:mx-10 mx-5 rounded-xl '>

            <div className='sm:p-20 p-5 lg:ml-100 md:ml-50'>
                <h1 className='text-2xl sm:text-3xl text-white mb-1 font-Montserrat'>Train your aiDR on your...</h1>
                <h1 className='text-secondery text-2xl sm:text-3xl font-Montserrat italic'>prefered email st|</h1>
                <p className='text-gray-500 text-lg mb-8 mt-5 sm:w-sm'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:mr-20">
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