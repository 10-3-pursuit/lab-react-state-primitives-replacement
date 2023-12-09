import { useState } from "react";

export default function RecommendationList({genre,books,moreLikeButton,handleMoreLikeButton}){
    const bookList = books.map(book=> <li key={book}>{book}</li>)
    
    return (
        <>
        {genre !== "all" ? (
    <>
      <h2>Recommendations for {genre}</h2>
      <ul className="book-list">
        {moreLikeButton ? bookList:bookList.slice(0,2)}
      </ul>
      {moreLikeButton ? null:<button onClick={handleMoreLikeButton}>More Like This</button>}
    </>
  ) : null}
  </>
      );
}