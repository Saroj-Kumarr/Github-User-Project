import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { DiGithubFull } from "react-icons/di";
import { FaGithubAlt } from "react-icons/fa";
import FollowerCompo from "./FollowerCompo";

function Body() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [followers, setFollowers] = useState([]);

  function fetchData(searchText) {
    console.log(searchText);
    axios
      .get("https://api.github.com/users/" + searchText)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        axios
          .get(res.data.followers_url)
          .then((res) => {
            console.log(res.data);
            setFollowers(res.data);
            //  res.data.map((obj)=>{
            //   console.log(obj.login);
            //   console.log(obj.avatar_url);
            //   console.log(obj.html_url);
            //  })
          })
          .catch((error) => {
            console.log("Something went wrong❌");
          });
        // console.log(res.data.followers_url);
      })
      .catch((error) => {
        console.log("Something went wrong❌");
      });
  }

  return (
    <div className="flex justify-center mt-20">
      <div>
        <div className="fixed left-[550px] z-30 top-6">
          <input
            className="p-2 w-[350px] "
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Enter user name..."
            value={searchText}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchData(searchText);
              }
            }}
          />
          <button
            className="p-2  font-bold bg-black text-white"
            onClick={() => {
              fetchData(searchText);
            }}
          >
            Search
          </button>
        </div>

        <div className="detail flex relative top-2">
          {data.length != 0 && (
            <div className="flex flex-1 detail flex-col">
              <img className="w-[400px]" src={data.avatar_url} alt="user-image" />
              <ul className="text-center font-bold">
                <li className="border-b-2 m-1 border-black">
                  Name : <span className="text-cyan-700">{data.name}</span>
                </li>
                <li className="border-b-2 m-1 w-80 border-black">
                  Bio : <span className="text-cyan-700">{data.bio}</span>
                </li>
                <li className="border-b-2 m-1 border-black">
                  Total Public repos :{" "}
                  <span className="text-cyan-700">{data.public_repos}</span>
                </li>
                <li className="border-b-2 m-1 border-black">
                  Github id : 
                  <a href={data.html_url}  className="text-cyan-700 ml-1">
                     Catch me!
                    <FaGithubAlt className="inline" />
                  </a>
                </li>
                <li className="border-b-2 m-1 border-black">
                  Date of Creation :
                  <span className="text-cyan-700">
                    {data.created_at.slice(0, 10)}
                  </span>
                </li>
                <li className="border-b-2 m-1 border-black">
                  Time of Creation :
                  <span className="text-cyan-700">
                    {data.created_at.slice(11, 19)}
                  </span>
                </li>
                <li className="border-b-2 m-1 border-black">
                  Followers :{" "}
                  <span className="text-cyan-700">{data.followers}</span>
                </li>
                <li className="m-1">
                  Following :{" "}
                  <span className="text-cyan-700">{data.following}</span>
                </li>
              </ul>
            </div>
          )}
<div className="flex flex-wrap detail ml-2">
          {followers.length != 0 && (
            <h1 className="">
              <span className="">{data.name}'s</span>{" "}
              Followers
            </h1>
          )}

          {followers.length != 0 &&
            followers.map((obj) => {
              return (
                <button onClick={() => fetchData(obj.login)}>
                  <FollowerCompo
                    key={obj.id}
                    login={obj.login}
                    imageURL={obj.avatar_url}
                    githubId={obj.html_url}
                  />
                </button>
              );
            })}
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Body;
