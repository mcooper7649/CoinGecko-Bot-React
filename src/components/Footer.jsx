const Footer = () => {
  return (
    <div className="footer container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top">
        <div className="d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className=" mb-3 mb-md-0">
            © 2022 Crypto Price Bot | By MyCodeDojo
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
