import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Routes , Route} from 'react-router-dom'


const App = () => (
 <>
  <Navbar/>
  <Routes>
    <Route path="/about" element={<Home/>}/>
    <Route path="/" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
</>
);

export default App;
