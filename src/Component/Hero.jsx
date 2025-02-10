import React from "react";

function Hero() {
  return (
    <>
      <section className="">
        <div className=" container flex flex-col-reverse lg:flex-row bg-[#002228] justify-between items-center  max-w-[1400px] mx-auto">
          <div className="flex flex-1 flex-col items-start gap-2 ps-20 py-10">
            <p className="text-xl text-secondery mb-2">AI SDRs (aiDRs)</p>
            <h1 className="text-2xl lg:text-6xl max-w-lg mt-2 text-white">
              <span className="font-semibold">More</span> leads,
              <br />
              <span className="font-semibold">less</span> people.
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 max-w-md lg:mt-0">
              Train an aiDR on your ICP and messaging matrix. Activate it on a
              patch. It will send personalized sequences to every target
              contact.
            </p>
            <button className="bg-secondery  text-black px-[18px] py-[16px] rounded-full flex flex-row items-center gap-1 cursor-pointer hover:shadow-[0px_0px_10px] hover:shadow-secondery/70">
              Sign Up for the Beta
              <img src="img2.png" alt="" />
            </button>
          </div>

          <div className="sm:flex-2 hidden sm:flex">
            <img className="" src="img.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
