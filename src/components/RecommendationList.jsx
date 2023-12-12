

const RecommendationList = ({recommendations, selectedGenre}) => {
  return (
    <>
        <h2>Recommendations for {selectedGenre}:</h2>
        {recommendations.map((book, index) => (
        <li key={index}>{book}</li>
        ))}
    </>
  )
} 

export default RecommendationList