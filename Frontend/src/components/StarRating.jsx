import React from "react";

const StarRating = ({ rating }) => {
  // Calculate full, half, and empty stars based on the rating
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div style={{}}>
      {" "}
      {/* Optional: set the star color */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <i key={`full-${i}`} className="fa-solid fa-star text-orange-500"></i> // Full star
        ))}
      {halfStar === 1 && (
        <i className="fa-solid fa-star-half-stroke text-orange-500"></i>
      )}{" "}
      {/* Half star */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star text-gray-700"></i> // Empty star
        ))}
    </div>
  );
};

export default StarRating;
