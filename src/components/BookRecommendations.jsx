// BookRecommendationEngine.jsx
import {useState} from 'react'
import "./BookRecommendations.css";
import bookData from "../books.json";

//BookRecommendations is the component we will use in App.jsx
const BookRecommendations = () => {

const [recommendation, setRecommendation] = useState([])
const [selectedGenre, setSelectedGenre] = useState('')

  const bookList = (genre) => {
    setRecommendation(bookData[genre])
    setSelectedGenre(genre)
  }

  return (
    <div className="book-recommendations">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
          {Object.keys(bookData).map(genre => {
            return <button onClick={() => bookList(genre)} key={genre}>{genre}</button>
            })
          }
      </div>
      <div>
        <h3>Recommendations for {selectedGenre}:</h3>
        <ul className='book-list'>
          {recommendation.length > 0 && recommendation.map(title => <li key= {title}>{title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default BookRecommendations;
