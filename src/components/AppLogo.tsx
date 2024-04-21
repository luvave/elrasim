import { AppName } from '@/config/AppConfig';
import Image from 'next/image';
import trolleybusIcon from '../../public/assets/trolleybus-icon.svg';

export const AppLogo = () => (
  <div className='flex items-center text-xl font-semibold'>
    <Image
      priority
      src={trolleybusIcon}
      alt="App logo"
      className='w-9 h-9 pr-2'
    />
    {AppName}
  </div>
);