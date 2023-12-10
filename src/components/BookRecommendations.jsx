// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

let genreString = "";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);
  // const [genres, setGenre] = useState(Object.keys(books)); // array of the keys
  // const [recommendations, setRecommendations] = useState(Object.values(books)); // array of the vaues

  const [ourGenre, setOurGenre] = useState(null);
  const [recommendations, setRecommendations] = useState([]);


  
  const handleGenreSelect = (genre) => {
    // const chosenGenre = Object.keys(books).filter ()
    const chosenGenre = bookData[genre] || [];
    
    // maybe include: if statement or ternary or switch to toggle between use state
    
    setRecommendations(chosenGenre);
    setOurGenre(genre);
    // console.log (chosenGenre);
  };

  return (
    <div className="book-recommendations">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">

        {/* add back ticks to add 2 classes */}
        {Object.keys(bookData).map((genre)=> <button key={genre} 
        onClick={() =>{
         handleGenreSelect(genre)
         genreString = genre}
         }>
          {genre}
          </button>)}
      </div>
      <div>
        <h3>Recommendations for {genreString}:</h3>
        {recommendations.length > 0 ? (
          <ul className="book-list">
            {recommendations.map((bookTitle, index) => (
              <li key={index} >{bookTitle}</li>
            ))}
          </ul>
        ):(<p> No recommendations available.</p>
        )}
        </div>
      </div>
  );
};

export default BookRecommendations;
// --- CSS Notes ---
/*
You can toggle between styles using ternary in class names
see example for this button: 
<button key={genre} className={`${ourGenre === genre ? "active" : ""} `} 
        onClick={() =>{
         handleGenreSelect(genre)
         genreString = genre}
         }></button>
*/

/* ----- NOTES React and JavaScript best practices -----

Directly assigning a value to a variable (`genreString = genre`) inside an `onClick` handler within JSX is not a typical or recommended approach in React. It might work, but it's not the standard way to handle state or variable assignments in React components. Usually, state management in React is done using the `useState` hook or other state management solutions.

If `genreString` is meant to be a state that reflects the currently selected genre, it should be handled using the `useState` hook, and updated via a function like `setGenreString`. Here's an example of how to do this:

```jsx
import React, { useState } from 'react';

function MyComponent({ bookData, ourGenre, handleGenreSelect }) {
  const [genreString, setGenreString] = useState('');

  const handleClick = (genre) => {
    handleGenreSelect(genre);
    setGenreString(genre);
  };

  return (
    <div>
      {Object.keys(bookData).map((genre) => (
        <button
          key={genre}
          className={ourGenre === genre ? "active" : ""}
          onClick={() => handleClick(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default MyComponent;
```

In this revised code:

- `genreString` is a state variable initialized with `useState`.
- `setGenreString` is used to update `genreString` when a genre button is clicked.
- `handleClick` is a new function that encapsulates both the `handleGenreSelect` call and the state update for `genreString`.

This approach aligns with React's principles of state management and makes your component's behavior more predictable and maintainable.
*/