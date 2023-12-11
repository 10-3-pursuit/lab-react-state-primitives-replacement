const RecommendationButtons = ({genres, handleGenreSelect}) => {
    return (
    <div className="genre-buttons" >
        {genres.map((genre, index) => (
            //once you create a new set of data with .map method you will always have to include an id or a key because the new set of data needs something to identify it 
            <button 
            key={index}
            //we're leaving onClick empty since it's supposed to display data 
            //we write event listeners that use call back functions like this, no need for opening curly braces 
            onClick={() => 
            //everytime a button is clicked handleGenreSelect will run and find the correct data which will display in the onClick event 
            handleGenreSelect(genre)}>{genre} 
            </button>
        ))} 
    </div>
  )
}

export default RecommendationButtons; 
