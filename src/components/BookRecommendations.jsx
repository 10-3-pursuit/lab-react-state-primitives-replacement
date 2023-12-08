import React, { useState } from "react";
import books from "../books.json";
import './BookRecommendations.css';

const BookRecommendations = () => {
  // State for all book data
  const [bookData, setBookData] = useState(books);

  // State for selected genre
  const [selectedGenre, setSelectedGenre] = useState(null);

  // State for book recommendations based on the selected genre
  const [recommendations, setRecommendations] = useState([]);

  // Function to handle genre selection
  const handleGenreSelect = (genre) => {
    // Update selected genre state
    setSelectedGenre(genre);

    // Update recommendations state based on selected genre
    setRecommendations(bookData[genre]);
  };

 

export default BookRecommendations;
