import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HomeContent from '../components/Home/HomeContent'
import Features from '../components/Home/Features/Features'
import Countdown from '../components/Home/Countdown/Countdown'
import FAQ from '../components/Home/FAQ/FAQ'

export default function Home() {
  return (
    <>
        <Navbar />
        <main>
            <HomeContent />
            <Features />
            <Countdown />
            <FAQ />
        </main>
    </>
  )
}
