import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid grid-cols-12 text-center" >
      <div  className="lg:bg-red-500 col-span-6 md:bg-blue-500 sm:bg-green-500">hi</div>
      <div  className="lg:bg-yellow-500 col-span-4 md:bg-blue-500 sm:bg-green-500">hi</div>
      <div  className="lg:bg-blue-500 col-span-2 md:bg-blue-500 sm:bg-green-500">hi</div>
    </div>
  )
}
