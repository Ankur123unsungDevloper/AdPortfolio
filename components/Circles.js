// next image
import Image from "next/image";

function Circles() {
  return (
    <div
      className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'
    >
      <Image
        src={ `${process.env.NEXT_PUBLIC_BASE_PATH}/circles.png` }
        alt=''
        width={260}
        height={200}
        className='w-full h-full'
      />
    </div>
  );
};

export default Circles;
