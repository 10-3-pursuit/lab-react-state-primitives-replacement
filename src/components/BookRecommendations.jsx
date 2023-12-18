// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  const [displayBook, setDisplayBook] = useState([]);
  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  const [selectedGenre, setSelectedGenre] = useState("");
  // TODO: Implement state for recommendations
  const [recommendations, setRecommendations] = useState([]);
  // TODO: Implement the handleGenreSelect function
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setRecommendations(books[genre]);
  };
  return (
    <div className="book-recommendations">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(bookData).map((genre) => (
          <button
            key={genre}
            onClick={() => {
              console.log(`Genre is ${genre}.`);
              handleGenreSelect(genre);
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        <h3>Recommendations:</h3>
        {/* TODO: Display recommendations based on selected genre */}
        <ul className="book-list">
          {recommendations.map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookRecommendations;
