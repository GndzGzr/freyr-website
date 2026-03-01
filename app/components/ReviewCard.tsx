import { FiStar } from "react-icons/fi";
const ReviewCard = ({
  review,
}: {
  review: {
    name: string;
    role: string;
    feedback: string;
    point: number;
    imageURL: string;
  };
}) => {
  return (
    <div className="service-card p-6 md:p-8 lg:p-12 rounded-lg shadow-md flex flex-col w-full h-full">
      <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-8 lg:mb-12 items-center">
        <img
          src={review.imageURL}
          alt={review.name}
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mb-0 md:mb-4 shrink-0"
        />
        <div className="">
          <p className="service-card-text-header mb-2">{review.name}</p>
          <p className="service-card-text-description mb-2">{review.role}</p>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`text-xl ${i < review.point ? "text-yellow-400" : "text-gray-400"}`}
                fill={i < review.point ? "#F2BC0A" : "none"}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="review-card-description">{review.feedback}</p>
    </div>
  );
};

export default ReviewCard;
