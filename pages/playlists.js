import React from 'react'
import PlaylistInfo from './components/PlaylistInfo'
import Navbar from './components/Navbar'

const playlists = ({ afroData }) => {
console.log(afroData, "hey")
console.log(afroData.map(category => ([category.name, category.contents.items.map(playlist => playlist.name)])))


return (
  <>
  <Navbar />
  <div className='bg-slate-900 pl-2'>
  {afroData.map(category => (
    <>
    <h1 className='text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-tl from-red-800 via-yellow-600 to-yellow-500'>{category.name}</h1>
    <div className='flex gap-4 overflow-x-scroll'>
    {category.contents.items.map((playlist, i) => <PlaylistInfo key={i} name={playlist.name} description={playlist.description} image={playlist.images?.[0]?.[0].url} cover={playlist.cover?.[0]?.url} artist={playlist.artists?.[0]?.name} shareUrl={playlist.shareUrl} />)}
    </div>
    </>
  ))}
  </div>
  </>
  )
}


export default playlists

export const getStaticProps = async () => {
  const data = await fetch('https://afrobeats-library-afro-playlists.firebaseio.com/afroplaylists/-NCCSv5cpQkjWBXXkVpQ/contents/items.json')
  const afroData = await data.json();
  return {
    props: {
      afroData
    }
  }
}