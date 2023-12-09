

export default function RecommendationButtons({genres,genreSelected}){
    return (
        <>
        <h3> Book Recommendations:</h3>
        {genres.map(genre=> <button onClick={()=>genreSelected(genre)} key={genre}>{genre}</button>)}
        
        </>
    )
}