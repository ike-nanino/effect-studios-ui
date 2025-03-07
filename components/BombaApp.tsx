
import PictureGrid from './PictureGrid'

function BombaApp() {
  return (
    <section className='mt-20'>
        <div className="text-start md:text-center py-12 px-4 md:px-12">
            <h1 className='font-medium text-4xl text-darkblue mb-6 border-t-1 pt-8'>
                The Bomba app <span className='md:hidden'>is all you need to send money both at home and abroad</span> 
                <span className='hidden md:inline'>helps our users send & receive money, <br /> swap currencies across borders and pay bills, safely, <br /> conveniently and on time.</span> 
            </h1>

            <p className='font-normal text-sm text-grayscale'>We are customer centric and focused on offering values to you that enable you <br /> achieve your financial needs.</p>
        </div>


        <PictureGrid />
      
    </section>
  )
}

export default BombaApp
