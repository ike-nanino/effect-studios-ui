import React from 'react'

function SignUp() {
  return (
    <section className='px-12 mt-6'>
      <div className='border-b-2 border-b-gray-200'>
        <h1 className='font-medium text-darkblue text-5xl py-10'>
            Sign up for free <br />
            Join thousands of users
        </h1>
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-10 py-8 '>
        <div className='flex justify-between gap-8 md:max-w-2/3'>
            <div className='flex flex-col gap-4'>
                <h5 className='font-medium text-sm text-darkblue'>
                    Company
                </h5>

                <p className='text-base text-grayscale font-normal'> About Us</p>
                <p className='text-base text-grayscale font-normal'>Features</p>
                <p className='text-base text-grayscale font-normal'>Blog</p>
                <p className='text-base text-grayscale font-normal'>Careers</p>
                <p className='text-base text-grayscale font-normal'>Legal</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h5 className='font-medium text-sm text-darkblue'>Support</h5>
                <p className='text-base text-grayscale font-normal'>hello@bomba.co</p>
                <p className='text-base text-grayscale font-normal'>WhatsApp</p>
                <p className='text-base text-grayscale font-normal'>Help Center</p>
            </div>
        </div>


        <div className='pt-2 space-y-2 md:max-w-1/3'>
            <p className='font-normal text-sm text-darkblue'>The neo bank for Africans globally</p>
            <p className='font-normal text-sm text-grayscale'>Bomba Ltd is a UK-incorporated Company with <br /> registration Number (RC. 12551277)</p>
        </div>
      </div>
    </section>
  )
}

export default SignUp
