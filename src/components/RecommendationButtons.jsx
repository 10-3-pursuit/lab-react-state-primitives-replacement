const RecommendationButtons = ({ genres, books, setGenre, setRecommendations, setMoreLikeThis }) => {
    function handleGenreClick (genre) {
        setGenre(genre);
        // set the book recommendations based on this genre
        const recommendedBooks = books[genre];
        setRecommendations(recommendedBooks);
        setMoreLikeThis(false);
    }

    return (
        <div className="genre-buttons">
            {genres.map(genre => <button onClick={e => handleGenreClick(e.target.textContent)} key={genre}>{genre}</button>)}
        </div>
    )
}

export default RecommendationButtons;