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

        {data.length == 0 ? (
          <span> </span>
        ) : (
          <div className=" flex relative -left-44 ">
            {data.length != 0 && (
              <div className="flex border-8 botext-white flex-1 fixed z-20 detail h-[590px] overflow-auto flex-col top-[82px]">
                <img
                  className="w-[331px]"
                  src={data.avatar_url}
                  alt="user-image"
                />
                <ul className=" border-2 text-center font-bold">
                  <li className="border-b-2 m-1 border-black">
                    Name : <span className="text-white">{data.name}</span>
                  </li>
                  <li className="border-b-2 m-1 w-80 border-black">
                    Bio : <span className="text-white">{data.bio}</span>
                  </li>
                  <li className="border-b-2 m-1 border-black">
                    Total Public repos :{" "}
                    <span className="text-white">{data.public_repos}</span>
                  </li>
                  <li className="border-b-2 m-1 border-black">
                    Github id :
                    <a href={data.html_url} className="text-white ml-1">
                      {data.name}'s Github URL
                    </a>
                  </li>
                  <li className="border-b-2 m-1 border-black">
                    Date of Creation :
                    <span className="text-white">
                      {data.created_at.slice(0, 10)}
                    </span>
                  </li>
                  <li className="border-b-2 m-1 border-black">
                    Time of Creation :
                    <span className="text-white">
                      {data.created_at.slice(11, 19)}
                    </span>
                  </li>
                  <li className="border-b-2 m-1 border-black">
                    Followers :{" "}
                    <span className="text-white">{data.followers}</span>
                  </li>
                  <li className="m-1">
                    Following :{" "}
                    <span className="text-white">{data.following}</span>
                  </li>
                </ul>
              </div>
            )}

            <div className="flex flex-wrap detail  relative left-[350px] flex-col top-9 mb-32 border-2 border-white">
              {followers.length != 0 && (
                <h1 className="text-center text-xl h-8 fixed border-2 border-white top-[81px] w-[896px] z-50 bg-cyan-700 font-bold">
                  <span className="text-white">{data.name}'s</span> Followers
                </h1>
              )}

              <div className="w-[896px] relative -top-1  pb-2 flex-1">
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
        )}
      </div>
    </div>
  );
}

export default Body;
