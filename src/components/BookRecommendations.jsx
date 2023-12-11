// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [recommendations, setrecommendations] = useState([])



 
console.log(books)

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  // TODO: Implement state for recommendations
  // TODO: Implement the handleGenreSelect function

  const handleGenreSelect = (genre) => {
     
    setSelectedGenre(genre)

    const filteredBooks = bookData[genre]
    setrecommendations(filteredBooks)
  }






  

  

    

  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
      {Object.keys(bookData).map((genre) => (
        <button key={genre} onClick= {() => handleGenreSelect(genre)}> {genre} </button>
      ))}
      </div>
      <div>
        <h3>Recommendations:</h3>
        <ol>
        {recommendations.map((book, index) => {
        return <li key={index}>{book}</li>;
        })}
        </ol>
       
      </div>
    </div>
  );
};

export default BookRecommendations;
