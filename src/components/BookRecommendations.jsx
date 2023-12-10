import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // SUGGESTED TODOS:

  // State to hold the book data
  const [books, setBooks] = useState(bookData);

  // TODO: Implement state for selected genre and recommendations
  const [selectedGenre, setSelectedGenre] = useState("");

  // TODO: Implement state for recommendations
  const [recommendations, setRecommendations] = useState([]);

  // TODO: Implement the handleGenreSelect function
  //
  const handleGenreSelect = (genre) => {
    if (selectedGenre === genre) {
      // Toggle selected genre: If the same genre is clicked again, it resets the selectedGenre state to null
      setSelectedGenre("");
      setRecommendations([]);
    } else {
      setSelectedGenre(genre);
      setRecommendations(books[genre]);
    }
  };

  return (
    <div className="book-recommendations book-recommendation-engine">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* Map over genres and create buttons */}
        {Object.keys(books).map((genre) => (
          // Create a button for each genre
          <button
            className="genre-buttons"
            key={genre}
            onClick={() => handleGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        {/* Display recommendations based on selected genre */}
        {recommendations.length > 0 && ( // If a genre is selected, display recommendations
          <h3>
            Recommendations for {selectedGenre}:
            <ul className="book-recommendations book-list">
              {/* Map over the books in the selected genre and create a list */}
              {recommendations.map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          </h3>
        )}
      </div>
    </div>
  );
};

export default BookRecommendations;
