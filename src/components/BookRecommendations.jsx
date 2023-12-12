// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  function updateGenre (genre) {
    setSelectedGenre((genre));
    setRecommendations(books[genre]);
  }

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  // TODO: Implement state for recommendations
  // TODO: Implement the handleGenreSelect function

  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(books).map((genre) => (
          <button key={genre} onClick={()=>updateGenre(genre)}>{genre}</button>
        ))}
      </div>
      <div>
        <h3>Recommendations:</h3>
        {/* TODO: Display recommendations based on selected genre */}
        <h2>Recommendations for <span>{selectedGenre}</span></h2>
        <ul className="book-list">
          {recommendations.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookRecommendations;
