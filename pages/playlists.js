import React from 'react'

const playlists = ({ afroPlaylists, popularUserPlaylists }) => {
console.log(afroPlaylists, popularUserPlaylists, "check")

  return (
    <div>playlists</div>
  )
}

export default playlists

export const getStaticProps = async () => {
  const categoryId = '0JQ5DAqbMKFNQ0fGp4byGU'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dc0c481150msh1dbe415c1ea2eb0p1b43b2jsn9a3fd1804f9d',
      'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
    }
  };

  const options2 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dc0c481150msh1dbe415c1ea2eb0p1b43b2jsn9a3fd1804f9d',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };

  const afroData = await fetch(`https://spotify-scraper.p.rapidapi.com/v1/genre/contents?genreId=${categoryId}`, options)
  const afroPlaylists = await afroData.json();
  const userPlaylists = await fetch('https://spotify81.p.rapidapi.com/search?q=afrobeats&type=playlist&offset=0&limit=20&numberOfTopResults=20', options2)
  const popularUserPlaylists = await userPlaylists.json()
  return {
    props: {
      afroPlaylists,
      popularUserPlaylists
    }
  }

}