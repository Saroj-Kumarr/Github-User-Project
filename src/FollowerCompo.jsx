import React from "react";
import { FaGithubAlt } from "react-icons/fa";
function FollowerCompo({login,imageURL,githubURL}) {
  return <div className="">
       <img className="w-20" src={imageURL} alt="user"/>
       <div>
        <ul className="">
        <li className="">Name : <span className="">{login}</span></li>
        <li className="">Github id : <a  href={githubURL} className="">Catch me!
  <FaGithubAlt className=""/></a></li>

        </ul>
        
       </div>
     </div>;
}

export default FollowerCompo;
