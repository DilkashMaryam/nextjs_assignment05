import Header from "@/components/Header";
import Image from "next/image"
import {Libre_Bodoni} from "next/font/google"

const libreBodoni = Libre_Bodoni({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className="h-screen flex felx-col">
       <div className="w-full max-w-7xl bg-[#FFFFFF] flex flex-col">
        <Header></Header>
        <div className="w-[50%] ml-[50px] bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-between gap-40 p-8 md:p-16">
        <div className="w-1/2 ml-[200px] flex-1 flex justify-center">
        <div className="flex-1">
          <h1 className={` ${libreBodoni.className} w-[472.97] mt-[50px] ml-[50px] font-bold text-4xl mb-4`}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className="font-serif font-medium text-2xl mb-6 text-[#787054] w-[600] mt-[50px] ml-[50px]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
            <button className="w-[247.67px] h-[49.2px] mt-[20p] ml-[50px] rounded-[8.6px] p-[8.6] ga-[8.6] bg-[#A29875]">
              <span className={` ${libreBodoni.className} w-[153] h-[32] text-[25.8] text-[#FFFFFF] pt-[4.5] pl-[35]`}>EXPLORE NOW</span></button>
        </div>
        </div>
        <div className="w-[300px] h-[400px] relative mt-[10px] ml-[400] rounded-tl-[128.99px] rounded-br-[128.99px] border-[0.86px] border-solid border-transparent flex">
        <Image src="/images/picture.jpeg" alt="picture" width={421.38} height={573.59}
        className="rounded-tl-[128.99px] rounded-br-[128.99px] object-cover absolute"/>
            <div className="ml-[10px] mr-[10px] mt-[7px] w-[500px] h-[390px] border-2 rounded-tl-[128.99px] rounded-br-[128.99px] border-[#FFFFFF] z-10"></div>
        </div>
        </div>
        </div> 
    </div>
  );
}
