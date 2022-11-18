import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="navbar-brand text-uppercase"
            href="#Header"
          >
            <img
              src="/logo/png/logo-no-background.png"
              alt="logo"
              className="logo"
            />
          </motion.a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="nav-link"
                  aria-current="page"
                  href="#Features"
                >
                  Features
                </motion.a>
              </li>

              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="nav-link"
                  href="#Pricing"
                >
                  Pricing
                </motion.a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
