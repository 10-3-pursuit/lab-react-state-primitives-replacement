// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";
import RecommendationButtons from "./RecommendationButtons";
import RecommendationList from "./RecommendationList";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  const [selectedGenre, setGenre] = useState("all")
  
  const genreList = Object.keys(bookData)
  const [recommendedBookList, setRecommendedList] = useState([])

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  
  function genreSelected(genre){
    setGenre(genre)
    setRecommendedList(books[genre])
    setMoreLike(false)
}
  // TODO: Implement state for recommendations
  // const [toggleBooks, setToggledBooks] = useState(true)

  // TODO: Implement the handleGenreSelect function
  
  const [moreLikeButton, setMoreLike] = useState(false)
  function handleMoreLikeButton(){
      setMoreLike(!moreLikeButton)
  }

  return (
    <div className="book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        <div className="book-recommendations">
          <RecommendationButtons genres={genreList} genreSelected={genreSelected} moreLikeButton={moreLikeButton} handleMoreLikeButton={handleMoreLikeButton}/>
          <RecommendationList genre={selectedGenre} books={recommendedBookList} moreLikeButton={moreLikeButton} handleMoreLikeButton={handleMoreLikeButton}/>    
        </div>
        </div>
    </div>
  );
};

export default BookRecommendations;
