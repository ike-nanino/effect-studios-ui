import Image from 'next/image'


function MobileNav() {
  return (
    <div className='flex justify-end md:hidden py-10 mr-4'>
        <Image 
        src='/assets/images/menu.png'
        alt="Menu"
        width={50}
        height={50}
        />
      
    </div>
  )
}

export default MobileNav
