// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {

  // State for all book data
  const [books, setBooks] = useState(bookData);

  const [selectedGenre, setSelectedGenre] = useState(null)


  const handleGenre = (genre) => {
    
    setSelectedGenre(genre)
  }

  const getReccomendations = () => {
    if (selectedGenre) {
      return (
        <div>
        <ol>
          {books[selectedGenre].map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ol>
        </div>
      );
    } else {
      return <p>Select a genre</p>
    }
  }

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  // TODO: Implement state for recommendations
  // TODO: Implement the handleGenreSelect function
  
  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {Object.keys(books).map((genre) => (
          <button key={genre} onClick= {() => handleGenre(genre)}>{genre}</button>
        ))}
       
      </div>
      <div>
        <h3>Recommendations:</h3>
        {getReccomendations()}
      </div>
    </div>
  );
};

export default BookRecommendations;
