import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { useMovieContext } from '../contexts/movieContext';

const Navbar = () => {
  const { resetAll } = useMovieContext();

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div onClick={resetAll} className='absolute left-3 text-cyan-600 cursor-pointer hover:opacity-80'>
            <FaReact size={40} />
          </div>
          <Link to="/" onClick={resetAll} className="text-3xl font-bold text-white md:ml-2 ml-10 lg:ml-10">
            Movy
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/about"
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
