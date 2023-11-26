import React from "react";

function Header() {
  return (
    <div className="header  flex bg-cyan-700 border-2 p-4 justify-between fixed w-full top-0 z-20 h-20 ">
      <h1 className="font-bold  text-3xl relative left-8 max-[600]:relative max-[600]:left-10 ">
        Saroj <span className="text-white">Kumar</span>
      </h1>
      <div className=" text-white font-bold absolute right-2 top-4  max-[600px]:mr-3 max-[600px]:mt-1 max-[600px]:hidden">
        <button className="border-2 p-[7px] relative -left-4 border-black bg-white text-black font-bold">
          Sign-in
        </button>
        <button className="border-2 border-white p-[6px] bg-black text-white font-bold mr-8">
          Sign-up
        </button>
      </div>
    </div>
  );
}

export default Header;
