import FreyerHeader from "./components/common/header/FreyrHeader";
import Image from "next/image";
import SpannedHeader from "./components/common/SpannedHeader";
import CFAButton from "./components/common/CFAButton";
import CFAButtonSecondary from "./components/common/CFAButtonSecondary";
import CFAButtonSecondaryLarger from "./components/common/hero/CFAButtonSecondaryLarger";
import CFAButtonLarger from "./components/common/hero/CFAButtonLarger";
import MainHero from "./components/common/hero/MainHero";
import SectionHeader from "./components/common/SectionHeader";
import SectionDescription from "./components/common/SectionDescription";
import ServiceCard from "./components/ServiceCard";
import ProcessScheme from "./components/ProcessScheme";
import ReviewCard from "./components/ReviewCard";
import ReviewPoints from "./components/ReviewPoints";
import FAQAccordion from "./components/FAQAccordion";
import CTASection from "./components/CTASection";
import FreyrFooter from "./components/common/FreyrFooter";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <FreyerHeader />
      <MainHero
        spanFirst="Prestigious Organizations Flawless Experience"
        spanSecond="Global Standards"
      />
      <div className="mt-4">
        <SectionHeader
          titleSpanFirst="About"
          titleSpanSecond="FREYR"
          order={false}
        />
        <SectionDescription description="Discover the story behind our success." />
        <div className="flex px-128 mt-16 gap-16">
          <p className="paragraph text-left">
            Centered on quality, trust, and innovation, FREYR Event & Congress
            transforms every organization into a prestigious experience. We
            elevate scientific congresses, corporate events, and exclusive galas
            to global standards.<br></br>
            <br></br> We are more than just an operations agency; we are a
            strategic solution partner for your brand. With our experienced
            team, we guarantee seamless and end-to-end management. We bring your
            vision to life and take your brand to new heights.
          </p>
          <Image
            src="/images/about.png"
            width={400}
            height={384}
            alt="About Freyr"
          />
        </div>
      </div>
      <div className="mt-36">
        <SectionHeader
          titleSpanFirst="Our Bespoke"
          titleSpanSecond="Services"
          order={true}
        />
        <SectionDescription description="Flawless events tailored to your vision." />
        <div className="grid justify-center items-center grid-cols-3 gap-8 pt-16 px-24">
          <ServiceCard
            title="Congress & Summit Organizations"
            description="Expert planning for national & international congresses."
            imageSrc="/[service1].svg"
            href="/services/event-planning"
          />
          <ServiceCard
            title="Corporate Events"
            description="Professional solutions strengthening brand identity."
            imageSrc="/[service2].svg"
            href="/services/corporate-events"
          />
          <ServiceCard
            title="Gala & Award Ceremonies"
            description="Flawless planning for prestigious events."
            imageSrc="/[service3].svg"
            href="/services/gala-award-ceremonies"
          />
        </div>
      </div>
      <div className="mt-36">
        <SectionHeader
          titleSpanFirst="Our Organization"
          titleSpanSecond="Process"
          order={true}
        />
        <SectionDescription description="From initial concept to final reporting, we guide you through every stage with precision and care." />
        <div className="flex justify-center items-center">
          <Image
            src={"/images/process-image.svg"}
            alt="Process"
            width={1200}
            height={600}
            className="h-auto mt-16"
          />
        </div>
      </div>
      <div className="mt-36">
        <SectionHeader
          titleSpanFirst="Customer"
          titleSpanSecond="Reviews"
          order={true}
        />
        <SectionDescription description="Working together is about trust. Here is some honest feedback from our recent projects." />
        <ReviewPoints />
        <div className="grid justify-center items-center grid-cols-3 gap-12 pt-16 px-32">
          <ReviewCard
            review={{
              name: "Dr. Selin Arslan",
              role: "Association President",
              feedback:
                "Managing an international summit is stressful, but Freyer made it look effortless. Their precision and professional demeanor gave us complete peace of mind.",
              point: 5,
              imageURL: "/images/profile1.png",
            }}
          />
          <ReviewCard
            review={{
              name: "Marcus Weber",
              role: "Marketing Director",
              feedback:
                "We wanted a statement, not just an event. They understood our brand instantly and delivered a breathtaking design. They don’t just execute; they elevate.",
              point: 4,
              imageURL: "/images/profile2.png",
            }}
          />
          <ReviewCard
            review={{
              name: "Leyla K.",
              role: "Private Client",
              feedback:
                "I was anxious about the timing, but the team remained calm and handled every detail perfectly. I could actually enjoy my own event without worrying.",
              point: 5,
              imageURL: "/images/profile3.png",
            }}
          />
        </div>
      </div>
      <div className="mt-36">
        <SectionHeader
          titleSpanFirst="Frequently Asked"
          titleSpanSecond="Questions"
          order={true}
        />
        <SectionDescription description="Answers to your most common questions." />

        <div className="faq-div relative w-full aspect-[1240/577] mt-16">
          <Image
            src="/faq-bg.svg"
            alt="faq"
            fill
            className="object-cover px-48"
          />
          <FAQAccordion
            items={[
              {
                question: "What scale of events do you manage?",
                answer:
                  "We manage events of all scales, from intimate gatherings to large-scale conferences and international summits.",
              },
              {
                question: "How do you ensure the success of an event?",
                answer:
                  "Our process involves meticulous planning, attention to detail, and continuous communication with clients to ensure every aspect aligns with their vision.",
              },
              {
                question: "Do you offer post-event support?",
                answer:
                  "Yes, we provide comprehensive post-event support including feedback collection, reporting, and follow-up services to ensure client satisfaction.",
              },
              {
                question:
                  "Can you accommodate special requests or unique requirements?",
                answer:
                  "Absolutely. We pride ourselves on our flexibility and ability to customize events according to specific client needs and preferences.",
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-36">
        <CTASection />
      </div>
      <div className="mt-36">
        <FreyrFooter />
      </div>
    </div>
  );
}
