const RecommendationList = ({ genre, recommendations }) => {
  return (
    <div>
        <h2>Recommendations for {genre}</h2>
        {recommendations.map(book => <li key={book}>{book}</li>)}
    </div>
  )
}

export default RecommendationList