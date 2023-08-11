import React from "react";
import Header from "./Header";
import Banner from "../../src/assets/banner.jpg";
import Computer from "../../src/assets/computer.jpeg";
import Keyboard from "../../src/assets/keyboard.jpeg";
import Controller from "../../src/assets/controller.jpeg";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="  ">
      <div className="   bg-white m-0 p-0 pb-14">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 ">
          <div className="w-full col-span-2 grid grid-cols-1 gap-y-4 md:gap-y-6 ">
            <img
              src={Banner}
              className="w-full h-[35vh] object-cover md:h-auto"
            />
            <div className="grid md:grid-cols-2 items-center gap-y-3">
              <p className="text-4xl font-extrabold pl-10">
                The future of web 3.0?
              </p>
              <div className="w-full space-y-6">
                <p className="text-slate-500 px-7 md:px-1 ">
                  We dive into the next evolution of the web that claims to put
                  the power of the platform back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="bg-orange-600 text-white px-5 py-2 flex hover:rounded mx-auto md:mx-0">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 bg-400 w-full h-full px-5">
            <p className="text-orange-300 text-3xl font-bold mt-4">NEW</p>

            <div className="flex flex-col items-center justify-center h-[80%] gap-y-10 overflow-hidden">
              <div className="flex flex-col items-center gap-y-14  w-full">
                <div className="w-full">
                  <p className="text-white font-semibold text-xl mt-5 cursor-pointer">
                    Hydrogen Vs Electric Cars
                  </p>
                  <p className="text-white font-extralight font-montserrat text-sm">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                  <hr className="bg-white mt-6" />
                </div>
                <div className="w-full">
                  <p className="text-white font-semibold text-xl mt-5 cursor-pointer">
                    The Downsides Of AI Artistery
                  </p>
                  <p className="text-white font-extralight font-montserrat text-sm">
                    The Downsides Of AI Artistery
                  </p>
                  <hr className="bg-white mt-6" />
                </div>
                <div className="w-full">
                  <p className="text-white font-semibold text-xl mt-5 cursor-pointer">
                    Is VC Funding Drying Up?
                  </p>
                  <p className="text-white font-extralight font-montserrat text-sm">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-7 gap-y-4">
          <div className="flex md:pl-12 md:pr-4 px-2 space-x-3">
            <img src={Computer} className="h-48 w-72 object-fill cursor-pointer" alt="" />
            <div className="w-full flex flex-col justify-evenly h-full">
              <p className="text-slate-500 text-3xl">01</p>
              <p className="text-xl font-bold">Reviving Retro PCs</p>
              <p className="text-sm text-gray-500">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>

          {/*  */}
          <div className="flex md:pl-12 md:pr-4 px-2 space-x-3">
            <img src={Keyboard} className="h-48 w-72 object-fill cursor-pointer" alt="" />
            <div className="flex flex-col justify-evenly h-full w-full">
              <p className="text-slate-500 text-3xl">02</p>
              <p className="text-xl font-bold">Top 10 Laptops of 2022</p>
              <p className="text-sm text-gray-500">
                Our best picks for various needs and budgets
              </p>
            </div>
          </div>

         
          {/*  */}
          <div className="flex px-2 md:pl-12 md:pr-4 space-x-3">
            <img src={Controller} className="h-48 w-72 object-fill cursor-pointer" alt="" />
            <div className=" w-full flex flex-col justify-evenly">
              <p className="text-slate-500 text-3xl">03</p>
              <p className="text-xl font-bold">The Growth Of Gaming</p>
              <p className="text-sm text-gray-500">
                How the pandemic sparked fresh opportunities.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
