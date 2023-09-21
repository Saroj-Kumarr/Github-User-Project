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
    <div className="flex justify-center ml-60 mt-20">
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
            className="p-2 bg-slate-500 font-bold text-white"
            onClick={() => {
              fetchData(searchText);
            }}
          >
            Search
          </button>
        </div>

        <div className="">
          {data.length != 0 && (
            <div className="flex mt-1 detail relative -left-36 ">
              <img className="h-72" src={data.avatar_url} alt="user-image" />
              <ul className="ml-1 text-sm p-2 w-72">
                <li className="font-bold  mt-1 border-b-2 border-violet-950 text-slate-600">
                  Name : <span className="text-purple-950 ">{data.name}</span>
                </li>
                <li className="font-bold mt-1 border-b-2 border-violet-950 text-slate-600">
                  Bio : <span className="text-purple-950">{data.bio}</span>
                </li>
                <li className="font-bold mt-1 border-b-2 border-violet-950 text-slate-600">
                  Total Public repos :{" "}
                  <span className="text-purple-950">{data.public_repos}</span>
                </li>
                <li className="font-bold mt-1 text-slate-600 border-b-2 border-violet-950">
                  Github id :{" "}
                  <a href={data.url} className="text-purple-950 ">
                    Catch me!
                    <FaGithubAlt className="inline mb-1 text-xl ml-1" />
                  </a>
                </li>
                <li className="font-bold mt-1 border-b-2 border-violet-950 text-slate-600">
                  Date of Creation :{" "}
                  <span className="text-purple-950">
                    {data.created_at.slice(0, 10)}
                  </span>
                </li>
                <li className="font-bold mt-1  border-b-2 border-violet-950 text-slate-600">
                  Time of Creation :{" "}
                  <span className="text-purple-950">
                    {data.created_at.slice(11, 19)}
                  </span>
                </li>
                <li className="font-bold mt-1 border-b-2 border-violet-950 text-slate-600">
                  Followers :{" "}
                  <span className="text-purple-950">{data.followers}</span>
                </li>
                <li className="font-bold mt-1 border-b-2 border-violet-950 text-slate-600">
                  Following :{" "}
                  <span className="text-purple-950">{data.following}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex border-2 detail justify-around relative top-2 w-[600px] mb-24 relative -left-36 flex-wrap">
          {followers.length != 0 && (
            <h1 className="border-2 w-full text-center bg-white text-black">
              <span className="text-green-700 font-bold">{data.name}'s</span>{" "}
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
                    githubId={obj.url}
                  />
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Body;
