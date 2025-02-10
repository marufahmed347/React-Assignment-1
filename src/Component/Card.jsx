import React from 'react'

function Card() {

    const CardInfo =[
        {
            imgSrc:"img11.png",
            heading:"You’re in Control",
            para:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {
            imgSrc:"img12.png",
            heading:"Infinitely Scalable",
            para:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {
            imgSrc:"img13.png",
            heading:"Incredibly Flexible",
            para:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        }
    ];

  return (
    <>
    <section className="max-w-[1400px] mx-auto py-10 px-6 bg-primary">
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 !p-5'>
        {
            CardInfo.map((card)=>(
                <div key={card.id} className='items-center justify-center'>
                    <img className='px-10 h-auto object-cover' src={card.imgSrc} alt="" />

                    <div className='px-10 py-5'>
                    <h1 className='text-xl md:text-3xl text-white font-semibold mb-2'>{card.heading}</h1>
                    <p className='text-gray-500 text-lg'>{card.para}</p>
                    </div>
                </div>
            ))
        }
    </div>
    </section>
    </>
  )
}

export default Card