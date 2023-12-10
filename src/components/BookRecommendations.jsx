// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  const [selectedGenre, setSelectedGenre] = useState('');
  // TODO: Implement state for recommendations
  const [recommendations, setRecommendations] = useState([]);

  const [showAllBooks, setShowAllBooks] = useState(false);
  
  // TODO: Implement the handleGenreSelect function
  const handleGenreSelect = (selectedGenre) => {
    setSelectedGenre(selectedGenre);
    setRecommendations(bookData[selectedGenre].slice(0, 2) || []); 
    setShowAllBooks(false);
  };
  
  const handleMoreLikeThis = () => {
    const genreBooks = bookData[selectedGenre] || [];
    setRecommendations(genreBooks);
    setShowAllBooks(true);
  };

  return (
    <div className="book-recommendations ">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(bookData).map((genre, index) => (
          <button key={genre} onClick={() => handleGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>

      
      {selectedGenre && ( 
      <div>
        <h3>Recommendations for {selectedGenre}:</h3>
        {/* TODO: Display recommendations based on selected genre */}
        <ul className="book-list">
          {recommendations.map((bookTitle, index) => (
            <li key={index}>
              {bookTitle}
            </li>
          ))}
        </ul>
        <button onClick={handleMoreLikeThis}>More Like This</button>
      </div>
      )}

    </div>
  );
};

export default BookRecommendations;
