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

  const [selectedGenre, setSelectedGenre] = useState(null)
  const handleGenreSelect = (genre) => {
    setSelectedGenre(selectedGenre === genre ? null : genre)
  }

  return (
    <div className="book-recommendation-engine book-recommendations">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {Object.keys(books).map((genre) => (
          <button className="genre-buttons" key={genre} onClick={() => handleGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <div>
        <h3>Recommendations:</h3>
        {selectedGenre && ( 
          <ul className="book-recommendations book-list">
            {books[selectedGenre].map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BookRecommendations;
