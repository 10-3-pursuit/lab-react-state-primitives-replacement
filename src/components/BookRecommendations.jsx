import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State to hold the book data
  const [books, setBooks] = useState(bookData);

  // State to keep track of the selected genre
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Function to handle selecting a genre
  const handleGenreSelect = (genre) => {
    // Toggle selected genre: If the same genre is clicked again, it resets the selectedGenre state to null
    setSelectedGenre(selectedGenre === genre ? null : genre);
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
        <h3>Recommendations:</h3>
        {/* Display recommendations based on selected genre */}
        {selectedGenre && ( // If a genre is selected, display recommendations
          <ul className="book-recommendations book-list">
            {/* Map over the books in the selected genre and create a list */}
            {books[selectedGenre].map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookRecommendations;
