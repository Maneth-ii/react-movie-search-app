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
        <h1 className="text-center">Not Found!</h1>
      )}
    </div>
  );
};

export default CardList;
