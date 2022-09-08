import { useQuery } from "@tanstack/react-query";

const top200ng = () => {

  const fetchSongs = async () => {
    const response = await fetch('https://afrobeats-library-default-rtdb.firebaseio.com/afrobeatsdata/-NBMH0XrzsDzd4O1sNrd.json')
    return response.json()
  }

  const {data, isLoading, isError, fetchStatus} = useQuery(["songs"], fetchSongs)

  if (isLoading || fetchStatus === 'fetching') {
    return <div>Loading....</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="bg-slate-900 flex gap-8 flex-wrap justify-center px-[20%]">
      <div className="w-screen h-[15rem] lg:h-[20rem] xl:h-[30rem] bg-cover top200header lg:bg-center xl:bg-top">
        <h1 className="font-extrabold text-white text-5xl text-center sm:text-5xl md:text-5xl lg:text-7xl md:leading-tight pt-20 lg:pt-28 xl:pt-44">
        Top 200 <span className=" bg-clip-text text-transparent bg-gradient-to-tl from-red-800 via-yellow-600 to-yellow-500" >Nigeria</span>
        </h1>
      </div>
      {data.map((song, index) => 
      <div className="song-card w-[300px] h-[400px] flex-col justify-between relative">
      <div className="header absolute top-5 left-5">
        <h1 className="text-5xl font-bold text-slate-100 border-2 border-yellow-500 p-2 bg-slate-900/40">#{index + 1}</h1>
      </div>
      <img className="object-cover h-full w-full" src={song.trackMetadata.displayImageUri}></img>
      <div className="footer w-full backdrop-blur-sm absolute bottom-0 text-center text-xl font-bold text-slate-100 tracking-wide bg-slate-900/40 px-2">
        <h1>{song.trackMetadata.trackName} - {song.trackMetadata.artists[0].name}</h1>
      </div>
      </div>)}
    </div>
  )
}

export default top200ng