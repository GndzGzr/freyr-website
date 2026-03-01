import { FiStar } from "react-icons/fi";



const ReviewPoints = () => {
  return (
    <div className="flex justify-center items-center mt-20 flex-col gap-4">
        <p className="service-card-text-header">Average Rating</p>
        <p className="point-count">4.9</p>
        <div className="flex">
            <FiStar size={24} color="#F2BC0A" fill="#F2BC0A" />
            <FiStar size={24} color="#F2BC0A" fill="#F2BC0A" />
            <FiStar size={24} color="#F2BC0A" fill="#F2BC0A" />
            <FiStar size={24} color="#F2BC0A" fill="#F2BC0A" />
            <FiStar size={24} color="#F2BC0A"  />
        </div>

        <p className="silent-text">(Based on recent client feedback)</p>
    
    </div>
  );
};


export default ReviewPoints;