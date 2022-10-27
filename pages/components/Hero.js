import Image from "next/image";
import Link from "next/link";
import artist_hero from "../../public/artist_hero.png";

const Hero = () => {
  return (
    <div className="landingcontainer h-screen w-screen bg-cover bg-bottom flex flex-col items-center justify-center ">
      <h1 className="font-extrabold text-white text-5xl text-center sm:text-5xl md:text-5xl lg:text-7xl md:leading-tight">
        Afrobeats{" "}
        <span className=" bg-clip-text text-transparent bg-gradient-to-tl from-red-800 via-yellow-600 to-yellow-500">
          Encyclopedia
        </span>
      </h1>
      <h1 className="font-semibold text-2xl text-center md:text-3xl lg:text-4xl text-white bg-slate-900/20 px-4 mt-4">
        The perfect place to explore the world's most buzzing genre.
      </h1>
      <div className="mt-16 flex flex-col md:flex-row gap-4">
        <Link href="/top-afrobeats-songs">
          <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Top Afrobeats Songs</span>
          </span>
        </Link>
        <a
          href="/playlists"
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">
              Explore Popular Playlists
            </span>
          </span>
        </a>
        {/* <a href="/recommendations" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
      <span className="w-full h-full bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500 group-hover:from-red-800 group-hover:via-yellow-600 group-hover:to-yellow-500 absolute"></span>
      <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
      <span className="relative text-white">Get Recommendations</span>
      </span>
      </a> */}
      </div>
    </div>
  );
};

export default Hero;
