// BookRecommendationEngine.jsx
import React, { useState } from "react";
import RecommendationButtons from "./RecommendationButtons";
import RecommendationList from "./RecommendationList";
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
  // implemented it in RecommendationButtons

  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <RecommendationButtons genres={genres} books={books} setGenre={setGenre} setRecommendations={setRecommendations}/>
      <RecommendationList genre={genre} recommendations={recommendations}/>
    </div>
  );
};

export default BookRecommendations;
