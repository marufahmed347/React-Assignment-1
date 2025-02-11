import React from "react";

function Hero() {
  return (
    <>
      <section>
        <div className=" mx-auto sm:bg-[url('/img43.jpg')] bg-no-repeat bg-cover sm:bg-right bg-[url('/img42.jpg')] bg-bottom py-6">
          <div className="flex flex-1 flex-col sm:items-start items-center gap-2 sm:ps-20 ps-5 py-10">
            <p className="text-xl text-secondery mb-2">AI SDRs (aiDRs)</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] max-w-[220px] sm:max-w-[300px] lg:max-w-[450px] mx-auto sm:mx-0 !mt-2 font-Montserrat">
						More <span className="font-medium italic">leads</span>,
						less <span className="font-medium italic">people</span>.
					</h1>
            <p className="text-lg lg:text-xl text-gray-500 sm:max-w-md sm:text-start text-center lg:mt-0">
              Train an aiDR on your ICP and messaging matrix. Activate it on a
              patch. It will send personalized sequences to every target
              contact.
            </p>
            <button className="bg-secondery text-black px-[18px] py-[16px] rounded-full flex flex-row items-center gap-1 cursor-pointer hover:shadow-[0px_0px_10px] hover:shadow-secondery/70 mt-4">
              Sign Up for the Beta
              <img src="img2.png" alt="" />z
            </button>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
