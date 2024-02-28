const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 text-center font-bold text-base max-sm:text-xs text-white p-4 max-sm:p-2 border-t border-white border-opacity-50 z-30 w-full  bg-black ">
      Challenge by
      <a
        className="text-text-light-blue hover:text-yellow-100 ml-1 hover:underline"
        href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className="text-text-light-blue hover:text-yellow-100 ml-1 hover:underline"
        href="https://www.frontendmentor.io/profile/SoulRvr29"
        target="_blank"
      >
        Paweł Chudecki
      </a>
      .
    </footer>
  );
};

export default Footer;
