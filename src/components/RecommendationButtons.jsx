import React, { useState } from "react";


const RecommendationButtons = ({genre, onGenreSelect}) => {
  const [selectedGenre, setSelectedGenre] = useState(false)

  function selectGenre(){
    setSelectedGenre(true)
    onGenreSelect(genre)
  }

  return (
    <button onClick={selectGenre}>
{genre}</button>
  )
}

export default RecommendationButtons