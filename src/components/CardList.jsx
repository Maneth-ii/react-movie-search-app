/* eslint-disable react/prop-types */
import Card from "./Card";

// eslint-disable-next-line react/prop-types
const CardList = ({movieList,onClickCard} ) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="mt-8 mb-20 grid md:grid-rows-auto md:grid-cols-3 lg:grid-cols-5 mx-auto">
      {movieList?.length ? (
        // eslint-disable-next-line react/prop-types
        movieList.map((aMovie, index) => (
          <div key={index}>
            <Card onClickCard={onClickCard} aMovie={aMovie} />
          </div>
        ))
      ) : (
        <div className="col-span-5 mx-auto ">
          <h1 className="text-cyan-500  mx-auto text-4xl  text-center mt-10">Explore the World of Movies</h1>
          <p className=" w-[50%] mx-auto mt-10">MovieFlix is a comprehensive movie and TV series discovery platform that caters to every cinephile's cravings. With an extensive collection of films from various genres and eras, MovieFlix offers a seamless experience for users to explore, discover, and indulge in the captivating world of cinema.</p>
        </div>
      )}
    </div>
  );
};

export default CardList;
