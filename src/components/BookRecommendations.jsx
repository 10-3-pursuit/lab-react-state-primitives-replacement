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
  const [genres, setGenre] = useState(Object.keys(books));
  //console.log (genres);
  const [recommendations, setRecommendations] = useState(Object.values(books));
  //console.log (recommendations)

  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        <button>
        {genres.map(genre => genre)}
        </button>
      </div>
      <div>
        <h3>Recommendations:</h3>
        <button>
        {recommendations.map(recommendation => recommendation)}
        </button>
      </div>
    </div>
  );
};

export default BookRecommendations;
