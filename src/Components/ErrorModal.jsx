import React from "react";
import { GrClose } from "react-icons/gr";

const ErrorModal = () => {
  return (
    <div className="w-full bg-blue-100 h-screen flex items-center justify-center">
      <div className="w-2/5 mx-auto py-5  bg-white rounded-md p-3 px-6">
        <div className="flex justify-between items-center ">
          <p className="text-[21px] text-sans font-semibold">
            Unable to connect your account
          </p>
          {/* <GrClose className="text-[18px] cursor-pointer hover:rotate-90" /> */}
          <GrClose className="text-[18px] cursor-pointer hover:rotate-90 transform transition-transform" />
        </div>
        <p className="text-[15px] mt-3">
          Your changes were saved, but we could not connect your account due to
          a technical issue on our end. Please, try connecting again. <br />
          If this issue keeps happening,{" "}
          <span className="underline cursor-pointer">
            contact customer care
          </span>
        </p>

        <div className="mt-5 flex gap-x-2 justify-end">
          <button className="px-6 py-1.5 rounded-full border-[1.5px] border-orange-600 text-orange-600">
            Cancel
          </button>
          <button className="px-6 py-1.5 rounded-full border-[1.5px] border-orange-600 bg-orange-600 text-white">
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
