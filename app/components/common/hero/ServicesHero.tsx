import Image from "next/image";
import SpannedHeader from "../SpannedHeader";
import CFAButtonLarger from "./CFAButtonLarger";
import CFAButtonSecondaryLarger from "./CFAButtonSecondaryLarger";

const ServicesHero = ({ spanFirst, spanSecond }: { spanFirst: string; spanSecond: string }) => {
  return (
          <div className="px-4 md:px-12 lg:px-24 pt-8 md:pt-8">
        <div className="relative w-full aspect-[3/4] sm:aspect-[16/9] lg:aspect-[1240/577]">
          <Image
            src="/images/services-hero.jpg"
            alt="Services Hero Image"
            fill
            className="object-cover"
          />
          {
            // change via-x% to via-30% to make the gradient more visible
          }
          <div className="absolute inset-0 bg-gradient-to-b from-[#101010]/0 via-[#101010]/0 via-30% to-[#101010]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-8 md:mt-16 lg:mt-36">
            <SpannedHeader
              spanFirst={spanFirst}
              spanSecond={spanSecond}
            />
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 lg:gap-16 mt-8 md:mt-16 lg:mt-20 px-4">
              <CFAButtonLarger />
              <CFAButtonSecondaryLarger />
            </div>
          </div>
        </div>
      </div>
  )
}


export default ServicesHero;