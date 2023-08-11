import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
const Header = () => {
  const[isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown =()=>{
    setIsDropdownOpen(prevState => !prevState)
  }

  return (
    <div className="bg-white py-5 px-10 md:px-24 flex fixed w-full shadow">
      <div className="text-4xl  font-extrabold">W.</div>
      <div className="w-full justify-end flex items-center">
        <FaBars
          className={`flex md:hidden text-2xl transition-transform ${
            isDropdownOpen ? "rotate-90" : ""
          }`}
          onClick={toggleDropdown}
        />

        <div className="w-full justify-end hidden md:flex gap-x-10">
          <button className="cursor-pointer text-[15px] underline">Home</button>
          <button className="cursor-pointer text-[15px] hover:underline">
            New
          </button>
          <button className="cursor-pointer text-[15px] hover:underline">
            Popular
          </button>
          <button className="cursor-pointer text-[15px] hover:underline">
            Trending
          </button>
          <button className="cursor-pointer text-[15px] hover:underline">
            Categories
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="md:hidden bg-white shadow-lg w-full absolute left-0 right-0 mt-14 px-8">
          {/* Dropdown content */}
          <button className="cursor-pointer text-[15px] mb-2 block">
            Home
          </button>
          <button className="cursor-pointer text-[15px] mb-2 block">New</button>
          <button className="cursor-pointer text-[15px] mb-2 block">
            Popular
          </button>
          <button className="cursor-pointer text-[15px] mb-2 block">
            Trending
          </button>
          <button className="cursor-pointer text-[15px] mb-2 block">
            Categories
          </button>
        </div>
      )}
    </div>
  );
}

export default Header