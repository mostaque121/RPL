import Image from 'next/image';

export default function UserImage({user}) {
  return (
    <div>
    {user.image ? (
        <div className="relative w-[35px] h-[35px]">
            <Image 
                src={user.image} 
                fill
                alt="user"
                sizes="(max-width: 640px)"  // Add sizes prop for responsive images
                style={{ objectFit: 'contain' }}  // Maintain aspect ratio without stretching
            />
        </div>
        ) : (
        <div className="bg-blue-600 text-white w-[35px] h-[35px] text-lg flex items-center justify-center">
            {user.name.charAt(0).toUpperCase()}
        </div>
        )}
    </div>
  );
}