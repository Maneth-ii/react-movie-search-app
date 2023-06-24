import {Container} from "../components/Container"
import CardList from "../components/CardList"
import Footer from '../components/Footer'
import { createContext,useEffect,useState } from "react";
import axios from "axios";
const API_KEY = '6cc99fc0';

// eslint-disable-next-line react-refresh/only-export-components
export const movieData = createContext(null);

const Home = () => {
  const [inputQuery, setInputQuery] = useState("");
  const [timeoutId , setTimeoutId] = useState(null)
  const [movieList , setMovieList] = useState([]);
  useEffect(() => {
    // Fetch default movie list when the component mounts
    fetchMovieData("the walking dead");
  }, [])

  const fetchMovieData = async (searchString) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    if (response.data && response.data.Search) {
      setMovieList(response.data.Search);
    } else {
      setMovieList([]);
    }
  };
  

  const onInputChange = (event) => {
    const inputValue = event.target.value;
    setInputQuery(inputValue);
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchMovieData(inputValue), 900);
    setTimeoutId(timeout);
  };

  return (

    <>
   <Container>
        <div className="mx-auto w-[60%] text-center mt-8 rounded-md">
           
          <form>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input 
                  type="search" 
                  id="search" 
                  className="block w-full outline-none  p-4 pl-10 text-sm text-gray-900 border border-[#4e37aa] rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-[#4e37aa] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4e37aa] dark:focus:border-[#4e37aa]" 
                  placeholder="Search Movie or TV series" 
                  required
                  onChange={onInputChange}
                  value={inputQuery}
                  />
              </div>
          </form>

        </div>
        <movieData.Provider value={{ movieList: movieList }}>
          <CardList />
        </movieData.Provider>


    </Container>
    <Footer/>
    </>
  )
}

export default Home
