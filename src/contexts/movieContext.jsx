import { createContext, useState, useContext } from "react";
import axios from "axios";

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = '6cc99fc0';

const MovieContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => {
    return useContext(MovieContext);
  };
  
  // eslint-disable-next-line react/prop-types
  export const MovieProvider = ({ children }) => {
    const [movieList, setMovieList] = useState([]);
    const [selectedMovieData, setSelectedMovieData] = useState({});
    const [selected, setSelected] = useState(false);
  
    const fetchMovieData = async (searchString) => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
        );
        if (response.data && response.data.Search) {
          setMovieList(response.data.Search);
          localStorage.setItem("movies", JSON.stringify(response.data.Search));
        } else {
          setMovieList([]);
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    const onClickCard = async (imdbID) => {
      setSelected(true);
      const IMDB_ID = imdbID;
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${IMDB_ID}&apikey=${API_KEY}`
      );
      setSelectedMovieData(response.data);
      console.log(selectedMovieData);
      console.log(response.data);
    
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    const cancel = () => {
      setSelected(false);
      setSelectedMovieData(null);
    };
  
    // Pass the necessary data and functions through the context provider
    const contextValue = {
      movieList,
      selected,
      selectedMovieData,
      fetchMovieData,
      onClickCard,
      cancel,
    };
  
    return (
      <MovieContext.Provider value={contextValue}>
        {children}
      </MovieContext.Provider>
    );
  };
  