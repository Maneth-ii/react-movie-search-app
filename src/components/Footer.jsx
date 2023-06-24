const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 fixed w-full bottom-0">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="text-lg text-gray-300">
          &copy; {new Date().getFullYear()} Movy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
