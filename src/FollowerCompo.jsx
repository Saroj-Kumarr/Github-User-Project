import React from "react";

function FollowerCompo({ login, imageURL, githubURL }) {
  return (
    <div className="mx-2 mt-2 detail h-[270px] border-2 border-white w-52">
      <div className="flex items-center  justify-center">
        <img className="w-52" src={imageURL} alt="user" />
      </div>
      <div>
        <ul className="">
          <li className="font-bold">
            Name : <span className="text-white font-bold">{(login).substring(0,15)}</span>
          </li>
          <li className="text-white relative -top-1 underline underline-offset-2  font-bold text-[15px]">
            {" "}
            <a href={githubURL} className="">
              {(login).substring(0,12)}'s Github URL
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FollowerCompo;
