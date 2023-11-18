/* eslint-disable react/prop-types */
const Footer = ({ year, url = "/", name }) => {
  return (
    <footer className="bg-white m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center">
          © {year}{" "}
          <a
            href={url}
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
