

const RecommendationList = ({recommendations, selectedGenre}) => {
  return (
    <div>
        <h2>Recommendations for {selectedGenre}:</h2>
        {recommendations.map((book, index) => (
        <li key={book}>{book}</li>
        ))}
    </div>
  )
}

export default RecommendationList