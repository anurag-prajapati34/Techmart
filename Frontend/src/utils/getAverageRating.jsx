export const getAverageRating=(reviews)=>{
    const totalReviews = reviews.length;
const averageRating = totalReviews
  ? (reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1)
  : 0;

  return averageRating
}