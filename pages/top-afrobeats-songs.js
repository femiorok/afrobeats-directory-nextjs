import { useQuery, useQueryClient } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import { useState } from "react";

const topAfrobeatsSongs = () => {
  const [songData, setSongData] = useState();
  const [category, setCategory] = useState();

  const playbutton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12 stroke-yellow-500 hover:stroke-yellow-300 transition-colors"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
      />
    </svg>
  );

  const fetchSongs = async () => {
    const response = await fetch(
      "https://afrobeats-library-default-rtdb.firebaseio.com/afrobeatsdata.json"
    );
    const data = await response.json();
    const latestData = Object.keys(data)[Object.keys(data).length - 1];
    setSongData(data[latestData]);
    return data;
  };

  const { data, isLoading, isError, fetchStatus } = useQuery(
    ["songs"],
    fetchSongs
  );

  if (isLoading || fetchStatus === "fetching") {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error: There was an error</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-slate-900 flex gap-8 flex-wrap justify-center px-[20%]">
        <div className="w-screen h-[15rem] lg:h-[20rem] xl:h-[30rem] bg-cover top200header lg:bg-center xl:bg-top">
          <h1 className="font-extrabold text-white text-5xl text-center sm:text-5xl md:text-5xl lg:text-7xl md:leading-tight pt-20 lg:pt-28 xl:pt-44">
            Top 200{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-tl from-red-800 via-yellow-600 to-yellow-500">
              Nigeria
            </span>
          </h1>
        </div>
        {songData?.tracks?.map((song, index) => (
          <div className="song-card border border-yellow-500 w-60 p-4 grid grid-cols-3 relative">
            <div className="header grid justify-center">
              <h1 className="text-base justify-center flex items-center w-12 h-12 font-bold text-slate-100 border-2 border-yellow-500 p-2 bg-slate-900/40">
                #{index + 1}
              </h1>
              <a href={song.shareUrl} target="_blank">
                {playbutton}
              </a>
            </div>
            <div className="col-span-2 grid justify-center">
              <img
                className="w-40 h-40 justify-center"
                src={song?.album?.cover?.[0]?.url}
              ></img>
            </div>
            <div className="footer w-full col-span-3 text-center text-lg font-bold text-slate-100 px-2">
              <h1 className="h-20 flex items-center justify-center">
                {song.name} - {song.artists[0].name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default topAfrobeatsSongs;
