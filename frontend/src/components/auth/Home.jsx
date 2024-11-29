import Navbar from '@/shared/Navbar'
import React from 'react'
import Herosection from '../Herosection'
import CategoryCrousel from '../CategoryCrousel'
import LatestJobs from '../LatestJobs'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <CategoryCrousel/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
