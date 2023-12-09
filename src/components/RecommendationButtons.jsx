const RecommendationButtons = ({ genres, handleGenreSelect }) => {
  return (
    <div className="genre-buttons">
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default RecommendationButtons;
