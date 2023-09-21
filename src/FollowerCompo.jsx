import React from "react";
import { FaGithubAlt } from "react-icons/fa";
function FollowerCompo({login,imageURL,githubURL}) {
  return <div className="flex detail w-72 my-2">
       <img className="h-20 w-20" src={imageURL} alt="user"/>
       <div>
        <ul className="ml-1 p-2">
        <li className="font-bold  mt-1 border-b-2 border-violet-950 text-slate-600">Name : <span className="text-purple-950 ">{login}</span></li>
        <li className="font-bold mt-1 text-slate-600 border-b-2 border-violet-950">Github id : <a  href={githubURL} className="text-purple-950 ">Catch me!
  <FaGithubAlt className="inline mb-1 text-xl ml-1"/></a></li>

        </ul>
        
       </div>
     </div>;
}

export default FollowerCompo;
