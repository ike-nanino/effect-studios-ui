import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import Hero from '@/components/press/Hero'
import NewsCard from '@/components/press/NewsCard'
import SignUp from '@/components/SignUp'
import Socials from '@/components/Socials'
import React from 'react'

function Press() {
  return (
    <main>
      <Header />
      <MobileNav />
        <Hero />
        <NewsCard />
        <SignUp />
        <Socials />

      
    </main>
  )
}

export default Press
