// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";
import RecommendationButtons from "./RecommendationButtons";
import RecommendationList from "./RecommendationList";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  const [selectedGenre, setSelectedGenre] = useState(null)

  // TODO: Implement state for recommendations
  const [recommendations, setRecommendations] = useState([])

  // TODO: Implement the handleGenreSelect function
  function handleGenreSelect(genre){
    setSelectedGenre(genre)

    setRecommendations(bookData[genre].slice(0, 2))
  }

  function showMoreLikeThis(){
    setRecommendations(bookData[selectedGenre])
  }

  return (
    <div className="book-recommendations">
      <h2>Book Recommendations</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(bookData).map((genre) => (
          <RecommendationButtons 
          key={genre} 
          genre={genre}
          onGenreSelect={handleGenreSelect} />
        ))}
      </div>
      <div className="book-list">
        {/* TODO: Display recommendations based on selected genre */}
        {selectedGenre && <RecommendationList recommendations={recommendations} selectedGenre={selectedGenre}/>}
        <button onClick={showMoreLikeThis}>More Like This</button>

      </div>
    </div>
  );
};

export default BookRecommendations;
