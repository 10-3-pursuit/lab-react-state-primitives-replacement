// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  const [selectedGenre, setSelectedGenre] = useState("");
  // TODO: Implement state for recommendations
  const [recommendations, setRecommendations] = useState([]);
  // TODO: Implement the handleGenreSelect function
  const handleGenreSelect = (genre) => {
    const booksGenre = books[genre];
    setRecommendations(booksGenre);
    setSelectedGenre(genre);
  }
  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(bookData).map((genre) => (
        <button key={genre} onClick={() => handleGenreSelect(genre)}>{genre}</button>
      ))}
      </div>
      <div>
        <h2>Recommendations:</h2>
        {/* TODO: Display recommendations based on selected genre */}
        <ul>
          {recommendations.map((book) => (
            <li key= {book}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookRecommendations;