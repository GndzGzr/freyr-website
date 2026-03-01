import Image from "next/image";
import SpannedHeader from "../SpannedHeader";
import CFAButtonLarger from "./CFAButtonLarger";
import CFAButtonSecondaryLarger from "./CFAButtonSecondaryLarger";

const MainHero = ({ spanFirst, spanSecond }: { spanFirst: string; spanSecond: string }) => {
  return (
          <div className="px-24 pt-8">
        <div className="relative w-full aspect-[1240/577]">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            fill
            className="object-cover"
          />
          {
            // change via-x% to via-30% to make the gradient more visible
          }
          <div className="absolute inset-0 bg-gradient-to-b from-[#101010]/0 via-[#101010]/0 via-30% to-[#101010]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <SpannedHeader
              spanFirst={spanFirst}
              spanSecond={spanSecond}
            />
            <div className="flex gap-16 pt-36">
              <CFAButtonLarger />
              <CFAButtonSecondaryLarger />
            </div>
          </div>
        </div>
      </div>
  )
}


export default MainHero;