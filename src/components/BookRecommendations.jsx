// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json"
import RecommendationButtons from "./RecommendationButtons";
import RecommendationList from "./RecommendationList";

const BookRecommendations = () => {
  // State for all book data
  // const [books, setBooks] = useState(bookData); 
  // TODO: Implement state for selected genre and recommendations
  const [genre, setSelectedGenre] = useState() 

  // TODO: Implement state for recommendations 
  const [recommendations, setRecommendations] = useState([])

  // TODO: Implement the handleGenreSelect function 
  //once button is clicked the event will trigger this function which will return genre and recs 
  function handleGenreSelect(genre) {
    //this will update the data
    setSelectedGenre(genre) 
    //this will give the updated data a place to be stored in 
    const recommendedBooks = bookData[genre]
    //this will change the state of the V-DOM
    setRecommendations(recommendedBooks)
  }

  // set a variable equal to the keys of bookData obj
  const genres = Object.keys(bookData); 

  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
          <RecommendationButtons genres={genres} handleGenreSelect={handleGenreSelect}/> 
      </div>
      <div>
        <h3>Recommendations:</h3>
        {/* TODO: Display recommendations based on selected genre */}
        <RecommendationList genre={genre} recommendations={recommendations}/>
      </div>
    </div>
  );
};

export default BookRecommendations;
