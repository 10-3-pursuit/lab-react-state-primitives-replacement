// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  
  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  const [genre, setGenre] = useState(Object.keys(books))
  // console.log(genre)
  
  const [clicked, setClicked] = useState('')
  // TODO: Implement state for recommendations
  const [recommendations, setRecommendations] = useState(Object.values(books))
  // TODO: Implement the handleGenreSelect function


  function handleGenreSelect (genreChoice) {
    const recommendedBooks = books[genreChoice]
    setClicked(genreChoice)
    setRecommendations(recommendedBooks);
    console.log(recommendedBooks)
    
  }
  const genreArr = Object.values(genre)
  
  console.log(recommendations)
  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {genreArr.map((g, index) => {
          return <button onClick={ () => handleGenreSelect(g) } key={index}>{g}</button>
          
        })}
      </div>
      <div>
        <h3>Recommendations:</h3>
        {/* TODO: Display recommendations based on selected genre */}
        <h2>Recommendations for {clicked}</h2>
        <ul className="book-list">
          {clicked !== '' && Object.values(recommendations).map(r => (
            <li key={r}>{r}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BookRecommendations;
