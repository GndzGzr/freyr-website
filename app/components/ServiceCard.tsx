import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const ServiceCard = ({
  title,
  description,
  imageSrc,
  href,
}: {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}) => {
  return (
    <div className="service-card relative flex flex-col justify-center items-start w-full h-full gap-8 p-12">
      <div className="flex justify-center self-center card-icon-container p-3 rounded-full w-20 h-20">
        <img src={imageSrc} alt={title} className="object-contain" />
      </div>

      <h3 className="service-card-text-header mt-4">{title}</h3>
      <p className="service-card-text-description text-left mb-24">
        {description}
      </p>

      <Link href={href} className="absolute bottom-4 right-4 text-[#D2AD7A] hover:text-white transition-colors">
        <FiChevronRight size={24} />
      </Link>
    </div>
  );
};

export default ServiceCard;
