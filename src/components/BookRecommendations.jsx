import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // Not needed since there is only one object being used. If neccesary/required, line 8 can be uncommented, and every "bookData" occurence below line 8 can be switched with "books".

  //const [books, setBooks] = useState(bookData);

  const [selectedGenre, setSelectedGenre] = useState('')

  return (
    <div className="book-recommendations">
      <h2>Book Recommendations</h2>
      <div className="genre-buttons">
        {Object.keys(bookData).map((genre) => (
          <button
            className="genre-buttons"
            key={genre}
            // adds blue border when button clicked, removed if genre is already selected.
            style={{ border: selectedGenre === genre ? '2px solid blue' : 'none' }}
            // clicking on the same genre displayed removes reccomendations
            onClick={() => setSelectedGenre((currentGenre) => (currentGenre === genre ? '' : genre))}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        {selectedGenre && <ul className="book-list">
            <h3>Recommendations for {selectedGenre}:</h3>
            {bookData[selectedGenre].map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default BookRecommendations;
