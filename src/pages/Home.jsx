import {Container} from "../components/Container"
import CardList from "../components/CardList"
import Footer from '../components/Footer'
import { useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { useMovieContext } from "../contexts/movieContext";

const Home = () => {
  const [inputQuery, setInputQuery] = useState("");
  const [timeoutId , setTimeoutId] = useState(null)

  const { movieList, selected, selectedMovieData, fetchMovieData, onClickCard, cancel } = useMovieContext();

  const onInputChange = (event) => {
    try{
      const inputValue = event.target.value;
      setInputQuery(inputValue);
      clearTimeout(timeoutId);
      const timeout = setTimeout(() =>{
         fetchMovieData(inputValue)
        }, 900);
      setTimeoutId(timeout);

  } catch(err){
      console.log(err)
  }
  };

  return (<>
   <Container>
        <div className="mx-auto w-[60%] text-center mt-8 rounded-md">
           
          <form>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input 
                  placeholder='Breaking Bad'
                  type="search" 
                  id="search" 
                  className="block w-full outline-none  p-4 pl-10 text-sm text-gray-900 border border-[#4e37aa] rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-[#4e37aa] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4e37aa] dark:focus:border-[#4e37aa]" 
                  required
                  onChange={onInputChange}
                  value={inputQuery}
                  />
              </div>
          </form>

        </div>
        {selected && <MovieInfo selectedMovieData={selectedMovieData} cancel={cancel} />}
       
       <CardList onClickCard={onClickCard} movieList={movieList} />


    </Container>
    <Footer/>
    </>
  )
}

export default Home
