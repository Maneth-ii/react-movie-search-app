import Card from "./Card";
import { useContext } from "react";
import { movieData } from "../pages/Home";

const CardList = () => {
  const { movieList } = useContext(movieData);

  return (
    <div className="mt-8 grid md:grid-rows-auto md:grid-cols-3 lg:grid-cols-5 mx-auto">
      {movieList?.length ? (
        movieList.map((aMovie, index) => (
          <div key={index}>
            <Card aMovie={aMovie} />
          </div>
        ))
      ) : (
        <h1 className="text-center">Not Found!</h1>
      )}
    </div>
  );
};

export default CardList;
