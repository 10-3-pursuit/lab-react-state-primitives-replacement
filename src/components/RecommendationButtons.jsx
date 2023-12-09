
function RecommendationButtons({genre, onGenreSelect}){

  function selectGenre(){
    onGenreSelect(genre)
  }
  
  return (
    <button onClick={selectGenre}>{genre}</button>
)}

export default RecommendationButtons