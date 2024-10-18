// src/components/RestaurantReviewPage.js

import React, { useState } from "react";
import "./reviewpage.css";
const RestaurantReviewPage = () => {
  const [rating, setRating] = useState(0); // Store the selected rating
  const [review, setReview] = useState(""); // Store the user's review
  const [submittedReview, setSubmittedReview] = useState(null); // Store the submitted review

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, review };

    // Check if rating and review are valid before setting the state
    if (rating && review) {
      setSubmittedReview(newReview); // Store the submitted review in state
      console.log("Review submitted:", newReview);
      setRating(0); // Reset rating
      setReview(""); // Reset review text
    } else {
      console.log("Please fill in both rating and review.");
    }
  };

  return (
    <div className="review-page-container">
      <h1 className="review-page-title">Leave a Review for Our Restaurant</h1>

      <form onSubmit={handleSubmit} className="review-form">
        <div className="rating-section">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            <option value="">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <div className="review-section">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-review-button">
          Submit Review
        </button>
      </form>

      {/* Conditionally render the submitted review */}
      {submittedReview && (
        <div className="submitted-review">
          <h2>Thank You for Your Review!</h2>
          <p>
            <strong>Rating:</strong> {submittedReview.rating} / 5
          </p>
          <p>
            <strong>Your Review:</strong> {submittedReview.review}
          </p>
        </div>
      )}
    </div>
  );
};

export default RestaurantReviewPage;
