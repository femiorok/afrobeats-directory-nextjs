import type { NextPage } from 'next'
import Hero from './components/Hero'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../pages/components/Navbar'

const Home: NextPage = () => {
  return (
   <div className='h-screen'>
    <Navbar />
    <Hero/>
   </div>
)}

export default Home
