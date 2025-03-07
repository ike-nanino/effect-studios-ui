import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

export default function PictureGrid() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 lg:px-24 max-w-7xl mx-auto py-12">
    
        <div className="rounded-2xl overflow-hidden bg-violet-100 flex flex-col shadow-sm h-full">
          <div className="p-6 lg:p-8">
            <h2 className="text-xl text-gray-600">Swap</h2>
            <h1 className="font-bold text-2xl lg:text-3xl text-blue-900 mt-1">
              Peer to peer marketplace
            </h1>
            <p className="text-base text-gray-600 mt-4 leading-relaxed">
              Do you worry about unfavourable exchange rates
              when sending money? Create or accept offers at
              your preferred rate on Bomba's Peer to peer
              marketplace.
            </p>
            <div className="mt-6 pb-1 border-b-2 border-blue-400 w-max inline-block">
              <h4 className="flex items-center gap-2 text-blue-900">
                Swap now 
                <FontAwesomeIcon icon={faArrowRight} className='text-blue-400' />
              </h4>
            </div>
          </div>

          
          <div className="relative w-full h-56 md:h-64 mt-auto">
          <div className='absolute inset-0 -right-38 md:-right-64 bottom-0'>
            <Image
              src="/assets/images/market.png"
              alt="Market illustration"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              
            />
          </div>
          </div>
          
        </div>
  
       
        <div className="rounded-2xl overflow-hidden bg-green-50 flex flex-col shadow-sm h-full md:h-[calc(100%+3rem)] md:mb-6">
          <div className="p-6 lg:p-8">
            <h2 className="text-xl text-gray-600">Express</h2>
            <h1 className="font-bold text-2xl lg:text-3xl text-blue-900 mt-1">
              Take the express lane
            </h1>
            <p className="text-base text-gray-600 mt-4 leading-relaxed">
              Transact with light speed using Bomba Express.
              You can send funds at Bomba's exchange rates to
              family and friends from the UK & US to 20 African
              countries.
            </p>
            <div className="mt-6 pb-1 border-b-2 border-blue-400 w-max inline-block">
              <h4 className="flex items-center gap-2 text-blue-900">
                Send now 
                <FontAwesomeIcon icon={faArrowRight} className='text-blue-400' />
              </h4>
            </div>
          </div>
          <div className="relative w-full h-64 md:h-80 mt-auto">
            <Image
              src="/assets/images/express.png"
              alt="Money illustration"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </div>
        </div>
  
        
        <div className="rounded-2xl overflow-hidden bg-orange-50 flex flex-col shadow-sm h-full md:h-[calc(100%+3rem)]">
          <div className="p-6 lg:p-8">
            <h2 className="text-xl text-gray-600">Refer & Earn</h2>
            <h1 className="font-bold text-2xl lg:text-3xl text-blue-900 mt-1">
              Make money while you refer
            </h1>
            <p className="text-base text-gray-600 mt-4 leading-relaxed">
              Bomba allows you to earn passively through its
              platform. Refer your friends and family to use
              Bomba and earn up to £140.
            </p>
            <div className="mt-6 pb-1 border-b-2 border-blue-400 w-max inline-block">
              <h4 className="flex items-center gap-2 text-blue-900">
                Share now
                <FontAwesomeIcon icon={faArrowRight} className='text-blue-400' />
              </h4>
            </div>
          </div>
          <div className="relative w-full h-64 md:h-[400px] mt-auto">
          <div className='absolute inset-0 -right-26 md:-right-36 bottom-0'>

            <Image
              src="/assets/images/ref.png"
              alt="Gift illustration"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </div>
          </div>
        </div>
  
       
        <div className="rounded-2xl overflow-hidden bg-pink-50 flex flex-col shadow-sm h-full md:mt-12">
          <div className="p-6 lg:p-8">
            <h2 className="text-xl text-gray-600">Bomba Connect</h2>
            <h1 className="font-bold text-2xl lg:text-3xl text-blue-900 mt-1">
              Deals from top brands
            </h1>
            <p className="text-base text-gray-600 mt-4 leading-relaxed">
              With Bomba Connect, you can pay for and access 
              goods and services from some of the best and 
              trusted brands at the best rates and with 
              minimal wait time all within the Bomba App.
            </p>
            <div className="mt-6 pb-1 border-b-2 border-blue-400 w-max inline-block">
              <h4 className="flex items-center gap-2 text-blue-900">
                Explore now
                <FontAwesomeIcon icon={faArrowRight} className='text-blue-400' />
              </h4>
            </div>
          </div>
          <div className="relative w-full h-56 md:h-90 mt-auto">
            <Image
              src="/assets/images/cart.png"
              alt="Cart illustration"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </div>
        </div>
      </div>
    );
}