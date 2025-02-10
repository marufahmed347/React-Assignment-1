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
        <section className='py-12 bg-[#07292F] max-w-[1440px]'>
            <div className='mb-5'>
                <p className='text-center text-secondery'>OUR TRUSTED PARTNERS </p>
            </div>

            <div className='flex justify-center flex-wrap gap-5 w-full px-4'>
                {
                    IconData.map((e)=>(
                        <div key={e.id}>
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