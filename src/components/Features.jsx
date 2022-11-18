import { motion } from 'framer-motion';

function Features() {
  return (
    <div className="container features">
      <motion.h1
        animate={{ x: 10, y: 20 }}
        transition={{ type: 'spring', bounce: 0.25 }}
        className="text-uppercase"
      >
        Crypto Price Bot
      </motion.h1>
      <hr className="border border-2 opacity-50"></hr>

      <img src="iphone_mock2.png" alt="" />
      <motion.h2 whileHover={{ scale: 1.05 }} className="text-uppercase">
        Features
      </motion.h2>
      <hr className="border border-2 opacity-50"></hr>
      <div className="container-fluid">
        <div className="row feature-specs">
          <div className="col-lg-4 col-md-12 col-sm-12 text-col">
            <h3 className="feature-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>{' '}
              Notifications
            </h3>
            <div class="text-success">
              <hr />
            </div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ef476f"
                class="bi bi-discord"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>{' '}
              Discord
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ef476f"
                class="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
              </svg>{' '}
              Email
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ef476f"
                class="bi bi-chat-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
              </svg>{' '}
              SMS/Text/Telegram(Coming Soon)
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-col">
            <h3 className="feature-title">Control</h3>
            <div class="text-success">
              <hr />
            </div>
            <p>Search Any CoinGecko Project</p>
            <p>Set Change Percentage for Notification Threshold</p>
            <p>Set Interval Frequency</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-col">
            <h3 className="feature-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-tag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>{' '}
              Pricing
            </h3>
            <div class="text-success">
              <hr />
            </div>
            <p>CoinGecko Tokens Free</p>
            <p>Advanced Functionality</p>
            <p>Professional Coming Soon</p>
          </div>
        </div>
      </div>
      <motion.h2 whileHover={{ scale: 1.05 }} className="text-uppercase">
        Client and Server Side Notifications
      </motion.h2>
      <hr className="border border-2 opacity-50"></hr>

      <div className="card-wrapper">
        <div className="card mb-3">
          <h5 className="card-title text-uppercase">Discord Interface</h5>
          <div className="card-body">
            <ul className="card-text">
              <li>$Bitcoin - Checks CoinGecko for current price of Bitcoin </li>
              <li>
                %0.05 - Sets Notification threshold to be at least .05 price
                change{' '}
              </li>
              <li>^40 - Interval at which the bot checks for pricing</li>
            </ul>
            {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
            <img
              src="https://img001.prntscr.com/file/img001/U3_dLzSDSFO40LvaWLTE1g.png"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="card mb-3">
          <h5 className="card-title text-uppercase">Server Side Logging</h5>
          <div className="card-body">
            <ul className="card-text">
              <li>
                We can see additional information from our server side logging.
              </li>
              <li>
                Logging allows more granular information and error reporting.
              </li>
              <li>See example log below.</li>
            </ul>

            <img
              src="https://img001.prntscr.com/file/img001/vWFOBQPsT0CS33Q2o3vVMA.png"
              className="card-img-bottom"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
