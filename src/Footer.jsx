import React from "react";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer flex justify-center  bg-cyan-700 border-2  p-4 fixed w-full bottom-0 ">
      <div className="flex">
        <div className="flex relative -top-[3px]">
          <a href="https://github.com/Saroj-Kumarr">
            <FaGithubSquare className="m-1 text-2xl rounded-xl" />
          </a>
          <FaLinkedin className="m-1 text-sky-500 text-2xl rounded-xl" />
          <FaInstagramSquare className="m-1 text-pink-600 text-2xl rounded-xl" />
        </div>
        <div className="font-bold">
          | Developed by ❤️ Saroj <span className="text-white">Kumar</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
