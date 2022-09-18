import React from 'react'
import Image from 'next/image'

const PlaylistInfo = ({name, artist, description, image, cover, shareUrl}) => {
if (cover) {
    return (
        <div className='text-white h-60 w-48 flex flex-col items-center'>
            <a href={shareUrl} target="_blank">
            <div className='w-40 h-40 relative hover:animate-pulse'>
            <Image src={cover} layout="fill" />
            </div>
            </a>
            <h1 className=' font-light text-center text-xs'>{artist}</h1>
            <h1 className='text-center'>{name}</h1>
        </div>
    )
} else if (description?.includes("Cover:")) {
const newDescription = description.substring(0, description.indexOf("Cover:"))
console.log(description)
return (
    <div className='text-white h-60 w-48 flex flex-col items-center'>
        <a href={shareUrl} target="_blank">
        <div className='w-40 h-40 relative hover:animate-pulse'>
        <Image src={image} layout="fill" />
        </div>
        </a>
        <h1 className=' font-light text-center text-xs'>{newDescription}</h1>
    </div>
  )
} else {
return (
    <div className='text-white'>
        <a href={shareUrl} target="_blank">
        <div className='w-40 h-40 relative hover:animate-pulse'>
        <Image src={image} layout="fill" />
        </div>
        </a>
        <h1 className=' font-light text-center text-xs'>{description}</h1>
    </div>
)
}
}

export default PlaylistInfo