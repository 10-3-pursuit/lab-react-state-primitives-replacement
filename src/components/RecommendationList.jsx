//child component is where we use our eventlisteners

//we import the these props which are the beginning states of genres & recommendations because 
const RecommendationList = ({recommendations, genre}) => {
  return (
    <>
    <h2>Recommendations for {genre}</h2>
        <ul className="book-list">
            {recommendations.map((book, index) => (
                //once you create a new set of data with .map method you will always have to include an id or a key because the new set of data needs something to identify it 
                <li 
                key={index}>{book}
                </li>
            ))}
        </ul>
    </>
  )
}

export default RecommendationList;