//next image
import Image from "next/image";
import Circles from "./Circles";

function Bulb() {
  return (
    <div
      className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'
    >
      <Image
        src={ `${process.env.NEXT_PUBLIC_BASE_PATH}/bulb.png` }
        width={260}
        height={200}
        alt=''
        className='w-full h-full'
      />
    </div>
  );
};

export default Bulb;
