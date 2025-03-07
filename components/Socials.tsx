import Image from 'next/image'


function Socials() {
  return (
    <section className='flex flex-col-reverse md:flex-row justify-between items-center mt-10 p-4 md:p-20'>
        <div>
            <div className='flex gap-4 mb-3 py-6'>
                <Image 
                src='/assets/images/playstore.png'
                alt='Google Play'
                width={160}
                height={160}
                />

                <Image 
                src='/assets/images/apple.png'
                alt=''
                width={160}
                height={160}
                />
              
            </div>

            <div>
                <p className='text-sm text-navy font-normal mb-2'>
                &copy; 2022. Bomba Limited. All rights reserved.
                </p>

                <div className='flex justify-center items-center gap-1' >
                <p className='border-r-1 border-r-green-300 text-sm px-1  text-navy'>Terms of Service</p>
                <p className='border-r-1 border-r-green-300 text-sm px-1 text-navy'>Privacy Policy</p>
                <p className='border-r-1 border-r-green-300 text-sm px-1 text-navy'>T & C UK</p>
                <p className='text-sm text-navy'>Cookie Policy</p>
                </div>

            </div>
        </div>


        <div className='mb-2'>
          <h1 className='font-medium text-base text-darkblue mb-2'>Stay update on our newsletter</h1>

          <div className='mb-8'>
            <input type='text' placeholder='Enter your email address' className='bg-darkblue text-sm rounded-l-lg border-2 border-navy p-2 text-white mr-2'/>
            <button className='text-blue-400 border-b-1 border-b-blue-400 p-2'>Subscribe &gt; </button>
          </div>

          <div className='flex justify-between items-center gap-4'>
            <h6 className='text-xs text-navy' >Instagram</h6>
            <h6 className='text-xs text-navy'>Facebook</h6>
            <h6 className='text-xs text-navy'>LinkedIn</h6>
            <h6 className='text-xs text-navy'>Twitter</h6>

          </div>
        </div>
      
    </section>
  )
}

export default Socials
