import React from 'react'

const YoutubePlayer = ({ songId }) => {

    const source = `https://www.youtube.com/embed/${songId}`
    const width = 560
    const height =  315

  return (
    [songId && <div>
    <iframe 
    width={width}
    height={height}
    src={source} 
    ></iframe>
    </div>]
  )
}

export default YoutubePlayer