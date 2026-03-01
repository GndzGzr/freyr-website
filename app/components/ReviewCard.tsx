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
    <div className="service-card p-12 rounded-lg shadow-md flex flex-col w-full h-full">
      <div className="flex flex-row gap-12 mb-12 items-center">
        <img
          src={review.imageURL}
          alt={review.name}
          className="w-32 h-32 rounded-full mb-4"
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
