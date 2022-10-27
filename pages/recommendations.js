import { useState, useEffect, useRef } from "react";
import LoadingVideo from "./components/LoadingVideo";
import Recommendations from "./components/Recommendations";
import YoutubePlayer from "./components/YoutubePlayer";

const recommendations = ({ songs }) => {
  const video = useRef(null);
  const [songSeed1, setSongSeed1] = useState();
  const [songSeed2, setSongSeed2] = useState();
  const [songSeed3, setSongSeed3] = useState();
  const [songId, setSongId] = useState();
  const [loadingSong, setLoadingSong] = useState();
  const [getRec, setGetRec] = useState();
  const [recommendations, setRecommendations] = useState();
  const [recommendationSeeds, setRecommendationSeeds] = useState();
  const [accessToken, setAccessToken] = useState();

  const generateRandomIndex = (index) => {
    const randomSongIndex = Math.floor(Math.random() * 201);
    if (index === 1) {
      setSongSeed1(songs[randomSongIndex]);
    }
    if (index === 2) {
      setSongSeed2(songs[randomSongIndex]);
    }
    if (index === 3) {
      setSongSeed3(songs[randomSongIndex]);
    }
  };

  useEffect(() => {
    generateRandomIndex(1);
    generateRandomIndex(2);
    generateRandomIndex(3);
  }, []);

  useEffect(() => {
    const client_id = "aa588ad9e37f4b10ae5546505db6a586";
    const client_secret = "eea5b02bd08e4dd6befe6052f9f599e9";
    const url = "https://accounts.spotify.com/api/token";

    accessToken &&
      fetch(url, {
        method: "POST",
        body:
          "grant_type=client_credentials&client_id=" +
          client_id +
          "&client_secret=" +
          client_secret,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setAccessToken(res.access_token);
        });
  }, [accessToken]);

  const artist1 = songSeed1?.trackMetadata.artists[0].name.toString();
  const song1 = songSeed1?.trackMetadata.trackName;
  const artist2 = songSeed2?.trackMetadata.artists[0].name.toString();
  const song2 = songSeed2?.trackMetadata.trackName;
  const artist3 = songSeed3?.trackMetadata.artists[0].name.toString();
  const song3 = songSeed3?.trackMetadata.trackName;

  const getRecs = () => {
    const searchParams1 = `${artist1} ${song1}`;
    const searchParam2 = `${artist2} ${song2}`;
    const searchParam3 = `${artist3} ${song3}`;
    console.log(searchParams, "params");
    fetch(
      `https://api.spotify.com/v1/search?q=${searchParams1}&type=track&limit=1`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const playSong = (num) => {
    setLoadingSong(true);
    setSongId(false);
    const searchTerms = () => {
      if (num === 1) {
        return [
          songSeed1?.trackMetadata.trackName,
          songSeed1?.trackMetadata.artists[0].name,
        ];
      }
      if (num === 2) {
        return [
          songSeed2?.trackMetadata.trackName,
          songSeed2?.trackMetadata.artists[0].name,
        ];
      }
      if (num === 3) {
        return [
          songSeed3?.trackMetadata.trackName,
          songSeed3?.trackMetadata.artists[0].name,
        ];
      }
    };

    const lookUpSongId = async () => {
      const _searchTerms = searchTerms();
      console.log(_searchTerms, "search terms");
      const query = new URLSearchParams(
        `${_searchTerms[0]} ${_searchTerms[1]}`
      ).toString();
      console.log(query, "here's the query");

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "dc0c481150msh1dbe415c1ea2eb0p1b43b2jsn9a3fd1804f9d",
          "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
        },
      };

      fetch(
        `https://youtube-music1.p.rapidapi.com/v2/search?query=${query}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setSongId(response.result.songs[0].id))
        .catch((err) => console.error(err));
    };

    lookUpSongId();
  };

  useEffect(() => {
    songId && setLoadingSong(false);
  }, [songId]);

  const scroll = () => {
    video.current.scrollIntoView({ block: "end" });
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-slate-900 ">
      <div className="flex gap-8 flex-nowrap">
        {/* First Card */}
        <div className="flex flex-col items-center">
          <div className="song-card w-[300px] h-[400px] flex-col justify-between relative">
            <img
              className="object-cover h-full w-full"
              src={songSeed1?.trackMetadata.displayImageUri}
            ></img>
            <div className="footer w-full backdrop-blur-sm absolute bottom-0 text-center text-xl font-bold text-slate-100 tracking-wide bg-slate-900/40 px-2">
              <h1>
                {songSeed1?.trackMetadata.trackName} -{" "}
                {songSeed1?.trackMetadata.artists[0].name}
              </h1>
            </div>
          </div>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={() => generateRandomIndex(1)}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
              <span className="relative px-3 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Update selection</span>
              </span>
            </button>
            <button
              onClick={() => playSong(1)}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
              <span className="relative px-3 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Play Song</span>
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="song-card w-[300px] h-[400px] flex-col justify-between items-center relative">
            <img
              className="object-cover h-full w-full"
              src={songSeed2?.trackMetadata.displayImageUri}
            ></img>
            <div className="footer w-full backdrop-blur-sm absolute bottom-0 text-center text-xl font-bold text-slate-100 tracking-wide bg-slate-900/40 px-2">
              <h1>
                {songSeed2?.trackMetadata.trackName} -{" "}
                {songSeed2?.trackMetadata.artists[0].name}
              </h1>
            </div>
          </div>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={() => generateRandomIndex(2)}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
              <span className="relative px-3 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Update selection</span>
              </span>
            </button>
            <button
              onClick={() => playSong(2)}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
              <span className="relative px-3 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Play Song</span>
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="song-card w-[300px] h-[400px] flex-col justify-between items-center relative">
            <img
              className="object-cover h-full w-full"
              src={songSeed3?.trackMetadata.displayImageUri}
            ></img>
            <div className="footer w-full backdrop-blur-sm absolute bottom-0 text-center text-xl font-bold text-slate-100 tracking-wide bg-slate-900/40 px-2">
              <h1>
                {songSeed3?.trackMetadata.trackName} -{" "}
                {songSeed3?.trackMetadata.artists[0].name}
              </h1>
            </div>
          </div>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={() => generateRandomIndex(3)}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
              <span className="relative px-3 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Update selection</span>
              </span>
            </button>
            <button
              onClick={() => playSong(1)}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
              <span className="relative px-3 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Play Song</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen bg-slate-900 flex justify-center py-10">
        {loadingSong ? (
          <LoadingVideo ref={video} onLoad={() => scroll()} />
        ) : (
          <YoutubePlayer songId={songId} ref={video} onLoad={() => scroll()} />
        )}
        <button
          onClick={() => getRecs()}
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
          <span className="relative px-3 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Get Recommendations</span>
          </span>
        </button>
        {recommendations && (
          <Recommendations recommendations={recommendations} />
        )}
      </div>
    </div>
  );
};

export default recommendations;

export async function getStaticProps() {
  const res = await fetch(
    "https://afrobeats-library-default-rtdb.firebaseio.com/afrobeatsdata/-NBMH0XrzsDzd4O1sNrd.json"
  );
  const songs = await res.json();

  return {
    props: {
      songs,
    }, // will be passed to the page component as props
  };
}
