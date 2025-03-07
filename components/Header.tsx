import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

function Header() {
  return (
    <header className="justify-center py-12 border-b-2 border-b-gray-200 hidden md:flex">
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <p className='font-medium text-grayscale text-xl'>Features</p>
          <FontAwesomeIcon icon={faArrowDown} className='text-green-500' />
        </div>
        <p className='font-medium text-grayscale text-xl'>Help</p>
        <div className='flex items-center gap-2'>
          <p className='font-medium text-grayscale text-xl'>Company</p>
          <FontAwesomeIcon icon={faArrowDown} className='text-green-500' />
        </div>
      </div>
    </header>
  );
}

export default Header;
