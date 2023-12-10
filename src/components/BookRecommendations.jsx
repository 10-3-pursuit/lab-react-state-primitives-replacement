// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

// let genreString = "";

// Define a functional component named BookRecommendations to create an interface for book recommendations.
const BookRecommendations = () => {
  // Initialize a state variable 'books' with the data from 'bookData', enabling dynamic management of book data within the component.
  const [books, setBooks] = useState(bookData);

  // Commented out lines for reference - these were initial approaches for handling genre and recommendation data separately.
  // const [genres, setGenre] = useState(Object.keys(books)); // Creates a list of genres from the book data keys for potential filtering or display purposes.
  // const [recommendations, setRecommendations] = useState(Object.values(books)); // Creates a list of book recommendations from the book data values, potentially for display.

  // Establish a state to keep track of the currently selected genre, allowing the component to react and update the display based on user selection.
  const [ourGenre, setOurGenre] = useState("");
  // Initialize an empty array for recommendations, to be updated based on the selected genre, ensuring dynamic content presentation.
  const [recommendations, setRecommendations] = useState([]);

  // Define a function to handle changes in genre selection, crucial for updating the displayed recommendations based on user interaction.
  const handleGenreSelect = (genre) => {
    // Retrieve the list of books for the selected genre, defaulting to an empty array if the genre isn't in the data, thus ensuring robustness.
    const genreArr = bookData[genre] || []
    
    // Update the recommendations state with the books from the selected genre, dynamically altering the displayed recommendations.
    setRecommendations(genreArr);
    // Update the ourGenre state with the selected genre, which is used to display the current genre to the user.
    setOurGenre(genre);
    // Commented out line - an initial approach to filtering genres, kept for reference or potential future use.
    // const chosenGenre = Object.keys(books).filter ()
  };

  // The return statement provides the JSX layout of the component, defining its structure and content on the webpage.
  return (
    <div className="book-recommendations">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* Iterate over each genre in bookData to create a button for it, enabling user interaction for genre selection. */}
        {Object.keys(bookData).map((genre) => (
          <button key={genre} 
                  onClick={() => handleGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <div>
        <h3>Recommendations for {ourGenre}:</h3>
        {/* Conditional rendering to display recommendations if available, or a prompt to select a genre otherwise, enhancing user experience. */}
        {recommendations.length > 0 ? (
          <ul className="book-list">
            {/* Map each book title in the recommendations to a list item, dynamically creating a list of books based on the selected genre. */}
            {recommendations.map((bookTitle, index) => (
              <li key={index}>{bookTitle}</li>
            ))}
          </ul>
        ) : (
          <p>Please select a genre to view Book Recommendations</p>
        )}
      </div>
    </div>
  );
};

// Export the BookRecommendations component to enable its use in other parts of the application, facilitating modularity and reuse.
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