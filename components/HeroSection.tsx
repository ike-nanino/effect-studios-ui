import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

function HeroSection() {
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
              className='drop-shadow-xl hidden md:block'
            />
            <Image
              src="/assets/images/phone.png"
              alt="Hero Image Mobile"
              width={240}
              height={500}
              className='shadow-xl bg-transparent block md:hidden'
            />
          </div>
        </div>

        <div className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center px-6 md:px-16'>
          <h1 className='text-5xl md:text-6xl font-medium text-darkblue'>
            Multi-currency <br />
            account for Africans
          </h1>

          <p className='font-normal text-sm text-navy flex items-end justify-end'>
            Transact at home and abroad - create, send, hold and receive <br /> money in African and foreign currencies. Send money to and from <br /> Africa, seamlessly.
          </p>
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
