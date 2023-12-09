// MADE A RECOMMENDATIONSBUTTONS FUNCTIONAL COMPONENT WITH 2 PROPS OF GENRES AND HANDLEGENRESELECT.
function RecommendationButtons ({ genres, handleGenreSelect }) {
// RENDERED THE RECOMMENDATIONBUTTONS COMPONENT
  return (
    // CREATED A DIV WITH GENRE-BUTTONS.
    <div className="genre-buttons">
      {/* Mapping through genres to create buttons */}
      {genres.map((genre, index) => (
        // CREATED A BUTTON FOR EACH GENRE(MAKE SURE TO HAVE THE BUTTON INSIDE .MAP)
        <button key={index} onClick={() => handleGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};
//EXPORTED COMPONENT.
export default RecommendationButtons;
