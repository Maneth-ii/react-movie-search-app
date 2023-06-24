/* eslint-disable react/prop-types */
import { useContext } from "react";
import { movieData } from "../pages/Home";


const Card = ({ aMovie }) => {

  const {onClickCard} = useContext(movieData)

    return (
      <div onClick={() => onClickCard(aMovie.imdbID)} className='w-[15rem] p-2 box-border md:w-[14rem] relative rounded-lg mt-6 bg-black cursor-pointer  shadow-slate-300 h-[24rem] mx-auto'>
        <img className="w-[97%] h-[17rem] mt-2 border rounded-lg mx-auto shadow-lg shadow-blue-800" src={aMovie.Poster} alt={aMovie.Title} />
        <h3 className="text-center mt-1">{aMovie.Title}</h3>
        <p className="float-right mt-4 absolute right-2 bottom-1">{aMovie.Year}</p>
        <div className="float-middle mt-5 absolute left-3 bottom-1">
          <p>
            <span className="text-[#f5c518]">{aMovie.Type}</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Card;
  