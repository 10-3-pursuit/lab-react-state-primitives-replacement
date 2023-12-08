// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  const genres = Object.keys(books);

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  const [genre, setGenre] = useState("");
  // TODO: Implement state for recommendations
  const [recommendations, setRecommendations] = useState([]);
  // TODO: Implement the handleGenreSelect function
  function handleGenreClick (genre) {
    setGenre(genre);
    // set the book recommendations based on this genre
    const recommendedBooks = books[genre];
    setRecommendations(recommendedBooks);
  }

  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {genres.map(genre => <button onClick={e => handleGenreClick(e.target.textContent)} key={genre}>{genre}</button>)}
      </div>
      <div>
        <h3>Recommendations:</h3>
        <h2>Recommendations for {genre}</h2>
        {recommendations.map(book => <li key={book}>{book}</li>)}
      </div>
    </div>
  );
};

export default BookRecommendations;
