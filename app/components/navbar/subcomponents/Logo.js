import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div>
      <Link href="/home">
        <div className="relative w-36 h-[40px] sm:w-44">
          <Image 
            src={logo} 
            fill
            priority
            alt="Logo"
            sizes="(max-width: 640px)"  // Add sizes prop for responsive images
            style={{ objectFit: 'contain' }}  // Maintain aspect ratio without stretching
          />
        </div>
      </Link>
    </div>
  );
}

