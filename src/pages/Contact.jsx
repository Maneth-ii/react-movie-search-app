import { Container } from '../components/Container'
import Footer from '../components/Footer'
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    <Container>
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="flex items-center mb-6">
        <FaMapMarker className="text-gray-100 mr-3" />
        <p className="text-lg text-gray-100">123 Street, City, Country</p>
      </div>
      <div className="flex items-center mb-6">
        <FaPhone className="text-gray-100 mr-3" />
        <p className="text-lg text-gray-100">+123 456 789</p>
      </div>
      <div className="flex items-center mb-6">
        <FaEnvelope className="text-gray-100 mr-3" />
        <p className="text-lg text-gray-100">info@example.com</p>
      </div>
      <div className="flex">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 text-gray-100 hover:text-blue-500"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 text-gray-100 hover:text-blue-400"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-pink-500"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  
      <Footer />
    </Container>
    
    </>
  );
};

export default Contact;
