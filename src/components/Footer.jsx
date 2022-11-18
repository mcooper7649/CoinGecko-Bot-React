const Footer = () => {
  return (
    <div className="footer container">
      <footer className="justify-content-between align-items-center py-4 my-4 border-top">
        <div className="d-flex align-items-center footer-items">
          <span className="row mb-3 mb-md-0 copyright">
            © 2022 Crypto Price Bot
          </span>
          <span></span>
          <img className="brand" src="bw-brand.webp" alt="developer" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
