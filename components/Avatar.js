// next image
import Image from "next/image";

function Avatar() {
  return (
    <div
      className='hidden xl:flex xl:max-w-none'
    >
      <Image
        src="/avatar.png"
        width={700}
        height={600}
        alt=''
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
