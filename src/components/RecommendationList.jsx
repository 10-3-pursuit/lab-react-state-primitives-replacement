// DEFINED THE RECOMMENDATIONLIST FUNCTION COMPONENT WITH 2 PROPS.
const RecommendationList = ({ selectedGenre, recommendations }) => {
  // RENDERED THE RECOMMENDATIONLIST COMPONENT
  return (
    <div>
      {/* Displayed the selected genre in an h2 heading */}
      <h2>Recommendations for {selectedGenre}</h2>
      {/* Created an unordered list with the class name "book-list" */}
      <ul className="book-list">
        {/* Mapping through recommendations to create list items */}
        {recommendations.map((book, index) => (
          // Creating a list item for each recommendation
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;