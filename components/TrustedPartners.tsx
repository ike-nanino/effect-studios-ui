import React from 'react'
import Image from 'next/image'

function TrustedPartners() {

  const imagePairs = [
    { bw: "/assets/images/v.png", color: "/assets/images/vc.png", alt: "V" },
    { bw: "/assets/images/thunes.png", color: "/assets/images/thunesc.png", alt: "Thunes" },
    { bw: "/assets/images/true.png", color: "/assets/images/truec.png", alt: "True" },
    { bw: "/assets/images/access.png", color: "/assets/images/accessc.png", alt: "Access" },
    { bw: "/assets/images/rail.png", color: "/assets/images/railc.png", alt: "Rail" },
    { bw: "/assets/images/trun.png", color: "/assets/images/trunc.png", alt: "Trun" },
    { bw: "/assets/images/paga.png", color: "/assets/images/pagac.png", alt: "Paga" },
    { bw: "/assets/images/solid.png", color: "/assets/images/solidc.png", alt: "Solid" },
    { bw: "/assets/images/identity.png", color: "/assets/images/identityc.png", alt: "Identity" },
  ];

  return (
    <section className="py-12 px-4 md:px-18">
      <div className="flex flex-col md:flex-row items-center gap-2">
      
        <div className="w-full md:w-2/3 mb-8 flex flex-col md:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-darkblue mb-4">
            Trusted partners <br /> worldwide
          </h2>
          <p className="text-navy">
            We're partners with countless major organisations
            <br />
            around the globe
          </p>
        </div>

    
        <div className="w-full md:w-1/3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10">
            {imagePairs.map((pair, index) => (
              <div key={index} className="relative group aspect-[3/2] flex items-center justify-center">
               
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={pair.bw}
                    alt={`${pair.alt} - Black and white version`}
                    width={110}
                    height={40}
                    className="transition-opacity duration-500 grayscale group-hover:opacity-0 object-contain"
                  />
                </div>
                
          
                <Image
                  src={pair.color}
                  alt={`${pair.alt} - Colored version`}
                  width={110}
                  height={40}
                  className="transition-opacity duration-500 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedPartners