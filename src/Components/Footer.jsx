import React from "react";
import Profile from "../../src/assets/profile2.jpg";


const Footer = () => {
  return (
    <div className="w-full bg-slate-900 py-8 md:py-14 grid grid-cols-1 md:flex md:space-x-10 space-y-5">
      <div className="w-2/5 grid grid-cols-1 md:grid-cols-4 px-10 md:px-4 justify-between gap-y-6">
        <div className="flex items-center">
          <p className="text-white cursor-pointer hover:text-orange-600">
            Products
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-white cursor-pointer hover:text-orange-600">
            Blog
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-white cursor-pointer hover:text-orange-600">
            Shop
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-white cursor-pointer hover:text-orange-600">
            Contact
          </p>
        </div>
      </div>

      <div className="h-full w-full px-7 md:w-3/5 md:ml-20 flex items-center md:px-12 justify-between">
        <img
          src={Profile}
          alt=""
          className="h-20 flex rounded-full w-20 object-cover"
        />
        <p className="text-white">© 2023 batmobile inc</p>
      </div>
    </div>
  );
};

export default Footer;
