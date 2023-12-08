const RecommendationList = ({ genre, recommendations }) => {
  return (
    <div>
        <h2>Recommendations for {genre}</h2>
        <ul className="book-list">
          {recommendations.map(book => <li key={book}>{book}</li>)}
        </ul>
    </div>
  )
}

export default RecommendationList