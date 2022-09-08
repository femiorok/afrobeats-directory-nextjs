import type { NextPage } from 'next'
import Hero from './components/Hero'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
   <div className='h-screen'>
    <Hero/>
   </div>
)}

export default Home
