import { useEffect, useState } from "react";
import flavorsData from "../data/flavors";
import reviewsData from "../data/reviews";

function MainSection() {
  const [featuredFlavors, setFeaturedFlavors] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getRandomItems = (arr, num) => {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, num);
  };

  useEffect(() => {
    setFeaturedFlavors(getRandomItems(flavorsData, 3));
    setReviews(getRandomItems(reviewsData, 2));
  }, []);

  return (
    <div className="main-section">
      {/* About */}
      <h2>About Sweet Scoop</h2>
      <p>
        Sweet Scoop is your go-to place for delicious, creamy, and unique ice
        cream flavors. Explore our wide variety and find your favorite!
      </p>

      {/* Featured Flavors */}
      <h2>Featured Flavors</h2>
      <div className="flavor-grid">
        {featuredFlavors.map((flavor) => (
          <div key={flavor.id}>
            <img src={flavor.image} alt={flavor.name} width="150" />
            <h3>{flavor.name}</h3>
            <p>{flavor.price}</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <h2>Customer Reviews</h2>
      {reviews.map((rev, index) => (
        <div key={index}>
          <h4>{rev.customerName}</h4>
          <p>{rev.review}</p>
          <p>{"★".repeat(rev.rating) + "☆".repeat(5 - rev.rating)}</p>
        </div>
      ))}
    </div>
  );
}

export default MainSection;