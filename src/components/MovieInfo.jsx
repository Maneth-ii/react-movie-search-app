/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const MovieInfo = ({ selectedMovieData }) => {
    if (!selectedMovieData) {
      return null; // Return null or display a loading state if the data is not available yet
    }
  
    const { Actors, Awards, Director, Genre, Language, Poster, Ratings, Title, Year, Plot } = selectedMovieData;
  
    return (
      <div className='w-[85%] md:left-24 mx-auto mt-3 p-5 box-border flex md:flex-row flex-col gap-5 bg-black sticky z-10 '>
        <img className='h-[20rem] md:ml-2 mx-auto' src={Poster} alt={Title} />
        <div className="flex flex-col gap-5">
          <h3>Title: <span className="opacity-70">{Title}</span></h3>
          <p>{Plot}</p>
          <h3>Actors: <span className="opacity-70">{Actors}</span></h3>
          <h3>Awards: <span className="opacity-70">{Awards}</span></h3>
          <h3>Director: <span className="opacity-70">{Director}</span></h3>
          <h3>Genre: <span className="opacity-70">{Genre}</span></h3>
          <h3>Language: <span className="opacity-70">{Language}</span></h3>
          <h3>Ratings:</h3>
          <ul>
            {Ratings.map((rating, index) => (
              <li key={index}>{rating.Source}: <span className="opacity-70"> {rating.Value}</span></li>
            ))}
          </ul>
          <h3>Year: <span className="opacity-70">{Year}</span></h3>
        </div>
      </div>
    );
  };
  
  export default MovieInfo;
  