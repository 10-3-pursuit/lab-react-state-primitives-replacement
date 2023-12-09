// I IMPORTED ALL THE NECESSARY COMPONENTS AND THE DATA.
import React, { useState } from "react";
import RecommendationButtons from "./RecommendationButtons";
import RecommendationList from "./RecommendationList";
import books from "../books.json";
import "./BookRecommendations.css";

// I WROTE A BOOKRECOMMENDATIONS FUNCTION COMPONENT WITH USESTATE HOOKS INSIDE.
function BookRecommendations () {
  // I SET UP THE TWO USESTATES FOR SELECTED GENRE AND SET RECOMMENDATIONS
  const [selectedGenre, setSelectedGenre] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  // THIS VARIABLE IS TO ACCESS THE DATA USING .KEY.
  const genreArr = Object.keys(books);

  //MADE A FUNCTION COMPONENT TO HANDLE THE SELECTION OF GENRE
  function handleGenreSelect (genreChoice) {
    //USED THE SWITCH FUNCTION TO UPDATE THE SELECTED GENRE STATE
    setSelectedGenre(genreChoice);
    //SAME WITH RECOMMENDEDBOOKS
    const recommendedBooks = books[genreChoice];
    // UPDATED THE RECOMMENDATIONS STATE
    setRecommendations(recommendedBooks);
  };


  // USED ALL THE COMPONENTS TO FILL OUT THE RETURN.
  return (
    <div className="book-recommendations">
      <h2>Book Recommendations</h2>
      {/* RecommendationButtons component */}
      <RecommendationButtons
        genres={genreArr}
        handleGenreSelect={handleGenreSelect}
      />

      {/* RecommendationList component */}
      <RecommendationList
        selectedGenre={selectedGenre}
        recommendations={recommendations}
      />
    </div>
  );
};

export default BookRecommendations;