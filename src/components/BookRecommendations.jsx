// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  const [newGenre, setNewGenre] = useState("");
  const [nuRecommendations, setNuRecommendations] = useState([]);
  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  // TODO: Implement state for recommendations
  // TODO: Implement the handleGenreSelect function
  
  const handleGenreSelect = (genre) => {
    const bookSelection = books[genre];
    setNuRecommendations(bookSelection);
    setNewGenre(genre);
  };

  return (
    <div className="book-recommendations">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
       {Object.keys(books).map((genre) => (
        <button
          key = {genre}
              className = {newGenre === genre && "active"}
              onClick = {() => {handleGenreSelect(genre)}}
        > {genre}
        </button>))}
        
        {/* TODO: Map over genres and create buttons */}
      </div>
      <div >
        <h3>Recommendations for {newGenre}: </h3>
        {/* TODO: Display recommendations based on selected genre */}
        {nuRecommendations.length > 0 ? (
          <ul className="book-list" >
            {nuRecommendations.map((bookTitle, index) => (
              <li key={index}>{bookTitle}</li>
            ))}
          </ul>
        ):( <p>choose a genre.</p>
        )}
      </div>
    </div>
  );
};

export default BookRecommendations;
