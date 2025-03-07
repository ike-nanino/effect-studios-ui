import React from 'react'

function Hero() {
  return (
    <section className='bg-gray-300 mb-10'>
      <div className='pl-8 py-36'>
        
          <h1 className='text-start text-3xl md:text-5xl font-medium text-darkblue mb-4'>
          Latest news and media <br /> from around the world
          </h1>

          <h5 className='text-start text-sm md:text-lg text-navy mb-3'>
          Please write to us at media@bomba.co if you have a <br /> media enquiry. We'll do our best to get back to you as  <br /> soon as possible.
          </h5>
        
        <div className='flex gap-4 border-b-1 border-b-blue-500 max-w-26'>
          <p className='text-blue-500'>Get press kit</p>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
