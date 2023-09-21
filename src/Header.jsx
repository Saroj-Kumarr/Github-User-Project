import React from "react";


function Header() {
  const bgColor = document.getElementById("main");

  function dark() {
    bgColor.classList.remove("green", "cyan", "pink", "purple", "white");
    bgColor.classList.add("black");
  }

  function green() {
    bgColor.classList.remove("black", "cyan", "pink", "purple", "white");
    bgColor.classList.add("green");
  }

  function light() {
    bgColor.classList.remove("green", "cyan", "pink", "purple", "black");
    bgColor.classList.add("white");
  }

  function purple() {
    bgColor.classList.remove("green", "cyan", "pink", "black", "white");
    bgColor.classList.add("purple");
  }

  function pink() {
    bgColor.classList.remove("green", "cyan", "black", "purple", "white");
    bgColor.classList.add("pink");
  }

  function cyan() {
    bgColor.classList.remove("green", "black", "pink", "purple", "white");
    bgColor.classList.add("cyan");
  }

  return (
    <div className="header  flex bg-slate-300  border-2 p-4 justify-between fixed w-full top-0 z-20 h-20 ">
      <h1 className="font-bold text-3xl relative left-8 max-[600px]:hidden  max-[600px]:-top-1">
        Saroj <span className="text-[#155e75]">Kumar</span>
      </h1>
      <div className=" text-white font-bold absolute right-2 top-4  max-[600px]:mr-3 max-[600px]:mt-1">
        <button
          onClick={light}
          className="border-2 mx-1 border-black text-black bg-white p-1 rounded-lg"
        >
          Light
        </button>
        <button
          onClick={dark}
          className="border-2 mx-1 text-white bg-black p-1 rounded-lg"
        >
          Dark
        </button>
        <button
          onClick={green}
          className="border-2 mx-1 text-white bg-[#0f766e] p-1 rounded-lg"
        >
          Green
        </button>
        <button
          onClick={purple}
          className="border-2 mx-1 text-white bg-[#7c3aed] p-1 rounded-lg"
        >
          Purple
        </button>
        <button
          onClick={cyan}
          className="border-2 mx-1 text-white bg-[#155e75] p-1 rounded-lg"
        >
          Cyan
        </button>
        <button
          onClick={pink}
          className="border-2 mx-1 text-white bg-[#f472b6] p-1 rounded-lg"
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default Header;
