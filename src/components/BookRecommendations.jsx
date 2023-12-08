// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  // TODO: Implement state for recommendations
  // TODO: Implement the handleGenreSelect function

  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
      </div>
      <div>
        <h3>Recommendations:</h3>
        {/* TODO: Display recommendations based on selected genre */}
      </div>
    </div>
  );
};

export default BookRecommendations;
