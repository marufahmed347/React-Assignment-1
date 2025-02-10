import React from 'react'

function Icon() {

    const IconData =[
        {img:"img4.png"},
        {img:"img5.png"},
        {img:"img6.png"},
        {img:"img7.png"},
        {img:"img8.png"},
    ];

  return (
    <>
        <section className='max-w-[1400px] mx-auto py-12 lg:px-80 px-6 bg-[#07292F]'>
            <div className='mb-5'>
                <p className='text-center text-secondery'>OUR TRUSTED PARTNERS </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
                {
                    IconData.map((e)=>(
                        <div key={e.id} className=''>
                            <img className='object-cover h-auto ' src={e.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </section>

        
    </>
  )
}

export default Icon;