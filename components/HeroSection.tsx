"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;






function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const slides = [
    <div key={1} className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center px-4 md:px-12'>
      <h1 className='text-4xl md:text-5xl font-medium text-darkblue'>
        Multi-currency <br />
        account for Africans
      </h1>
      <p className='font-normal text-sm text-navy flex items-end justify-end'>
        Transact at home and abroad - create, send, hold and receive <br /> 
        money in African and foreign currencies. Send money to and from <br /> 
        Africa, seamlessly.
      </p>
    </div>,

    <div key={2} className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center px-6 md:px-16'>
      <h1 className='text-4xl md:text-5xl font-medium text-darkblue'>
        Choose from several <br />
        payment methods 
      </h1>
      <p className='font-normal text-sm text-navy flex items-end justify-end'>
        With Bomba, you get to choose how you send and receive money; <br /> 
        send at your own rate with 'Swap', send and receive instantly with <br /> 
        'Express', or make free local transfers with 'Withdraw Money'
      </p>
    </div>,

    <div key={3} className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center px-6 md:px-16'>
      <h1 className='text-4xl md:text-5xl font-medium text-darkblue'>
        Accept and create offers<br />
        with Swap
      </h1>
      <p className='font-normal text-sm text-navy flex items-end justify-end'>
        You can send money internationally at your preferred rate on our<br /> 
        Peer-to-peer Marketplace by choosing or accepting an offer. <br /> 
        Created offers get accepted within an average time of 30 minutes
      </p>
    </div>,

    <div key={4} className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center px-6 md:px-16'>
      <h1 className='text-4xl md:text-5xl font-medium text-darkblue'>
        Make instant transfers <br />
        with Express
      </h1>
      <p className='font-normal text-sm text-navy flex items-end justify-end'>
        When you send money using 'Express' - it’s sent at Bomba <br /> 
        exchange rate and your transaction is completed instantly
      </p>
    </div>,

    <div key={5} className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center px-6 md:px-16'>
      <h1 className='text-4xl md:text-5xl font-medium text-darkblue'>
        Review and confirm <br />
        your transaction
      </h1>
      <p className='font-normal text-sm text-navy flex items-end justify-end'>
        Review your transaction, ensure that the provided details are <br /> 
        correct, then click the send button!
      </p>
    </div>,

    <div key={6} className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center px-6 md:px-16'>
      <h1 className='text-4xl md:text-5xl font-medium text-darkblue'>
        Completed! <br />
        Fast, easy and secure
      </h1>
      <p className='font-normal text-sm text-navy flex items-end justify-end'>
        Money on its way! Send money today to your friends, family or <br /> 
        make payment to a business. <br /> Get started →  
      </p>
    </div>
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('left')
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const navigate = (dir: 'prev' | 'next') => {
    setDirection(dir!)
    setCurrentSlide(prev => {
      if (dir === 'next') return (prev + 1) % slides.length
      return (prev - 1 + slides.length) % slides.length
    })
  }



  return (
    <section className='bg-gray-100'>
      <div>
        <div className='py-8 flex justify-center items-center'>
          <div className="relative ">
            <Image
              src="/assets/images/iphone.png"
              alt="Hero Image"
              width={298}
              height={620}
              className='hidden md:block'
            />
            <Image
              src="/assets/images/phone.png"
              alt="Hero Image Mobile"
              width={240}
              height={500}
              className='block md:hidden'
            />
          </div>
        </div>
     
        <div className="relative w-full overflow-hidden py-12">
      <AnimatePresence initial={false} mode='popLayout'>
        <motion.div
          key={currentSlide}
          initial={{ x: direction === 'next' ? '100%' : '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 'next' ? '-100%' : '100%', opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 mt-8">
        <button
          onClick={() => navigate('prev')}
          className="px-4 py-2 bg-darkblue/90 text-white rounded-lg hover:bg-darkblue transition-all shadow-lg"
        >
          ← 
        </button>
        <button
          onClick={() => navigate('next')}
          className="px-4 py-2 bg-darkblue/90 text-white rounded-lg hover:bg-darkblue transition-all shadow-lg"
        >
           →
        </button>
      </div>
    </div>


        <div className='flex flex-col md:flex-row justify-between px-4 md:px-16 border-t-0 md:border-t border-gray-600 mt-4 py-4 flex-1'>

          <div className='hidden md:flex justify-between flex-1'>
            <div className='flex space-x-4'>
              <h1>News & Release update</h1>
              <div className='space-y-2'>
                <div>
                  June 20, 2022 - <span className='text-blue-400'> Bomba now has a dollar wallet, activate your account</span>
                </div>
                <div>
                  June 01, 2022 - <span className='text-blue-400'> Top 10 Summer Vacation Places In 2022</span>
                </div>
              </div>
            </div>
          </div>


          <div className='flex md:hidden items-center gap-4 w-full mb-4'>
            <Image
              src="/assets/images/play.png"
              alt="Mobile Hero"
              width={50}
              height={50}
              className='object-contain'
            />

            <p>See how it works</p>
          </div>


          <div className='flex gap-4'>
            <h2 className='hidden md:inline'>Scroll Down</h2>
            <FontAwesomeIcon icon={faArrowDown} className='text-green-500 px-4 md:px-0 animate-bounce' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
