const RecommendationList = ({ genre, recommendations, moreLikeThisClicked }) => {
  const booksLimit = 2;
  const recommendationsList = recommendations.map(book => <li key={book}>{book}</li>);

  return (
    <div>
        <h2>Recommendations for {genre}</h2>
        <ul className="book-list">
          {moreLikeThisClicked ? recommendationsList : recommendationsList.slice(0, booksLimit)}
        </ul>
    </div>
  )
}

export default RecommendationList