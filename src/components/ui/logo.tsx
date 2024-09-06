import Image from 'next/image';

// @project
import Netflix from '@/assets/Netflix_Logo_RGB.png';

const Logo = () => {
  return <Image src={Netflix} alt='Netflix' height={50}/>;
};

export default Logo;
