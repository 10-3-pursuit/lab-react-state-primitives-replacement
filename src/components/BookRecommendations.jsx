// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  const [genre, setGenre] = useState();
  const [recs, setRecs] = useState();

  const handleGenreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
    setRecs(books[selectedGenre]);
  }


  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(books).map((genre) => {
          return (
            <button onClick={() => {
              handleGenreSelect(genre)
              console.log(genre)
              console.log(books[genre])

            }} key={genre}>{genre}</button>
          )
        })}
      </div>
      <div>
        <h2>{genre}</h2>
        <h3>Recommendations:</h3>
        <ul>
          {recs.map((book) => {
            return (
              <li key={book}>{book}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default BookRecommendations;
