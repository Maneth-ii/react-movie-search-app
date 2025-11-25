import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Routes , Route} from 'react-router-dom'
import { MovieProvider } from "./contexts/movieContext";


const App = () => (
 <MovieProvider>
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </>
 </MovieProvider>
);

export default App;
