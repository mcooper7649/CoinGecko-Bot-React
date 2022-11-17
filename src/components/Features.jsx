function Features() {
  return (
    <div className="container features">
      <h1>CoinGecko Price Bot</h1>
      <img src="iphone_mock2.png" alt="" />
      <h1>Features</h1>
      <hr className="border border-danger border-2 opacity-50"></hr>
      <div className="container-fluid">
        <div className="row feature-specs">
          <div className="col-lg-4 col-md-12 col-sm-12 text-col">
            <h3 className="feature-title">Pricing</h3>
            <div class="text-success">
              <hr />
            </div>
            <p>Freemium</p>
            <p>Free Basic Functionality</p>
            <p>Professional for Traders</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-col">
            <h3 className="feature-title">Notifications</h3>
            <div class="text-success">
              <hr />
            </div>
            <p>Discord Notifcations</p>
            <p>Email</p>
            <p>SMS/Text/Telegram(Coming Soon)</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-col">
            <h3 className="feature-title">Control</h3>
            <div class="text-success">
              <hr />
            </div>
            <p>Control via Discords Interface</p>
            <p>Change Token</p>
            <p>Set Change Percentage for Notification Threshold</p>
            <p>Set Interval Frequency</p>
          </div>
        </div>
      </div>
      <h1>Interface</h1>
      <hr className="border border-danger border-2 opacity-50"></hr>

      <div className="card mb-3">
        <img
          src="https://img001.prntscr.com/file/img001/U3_dLzSDSFO40LvaWLTE1g.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Discord Notifcations</h5>
          <p className="card-text">
            By passing simple commands we can control the Bot Easily!
          </p>
          {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Server Side Logging</h5>
          <p className="card-text">
            We can see additional information from our server side logging.
          </p>
        </div>
        <img
          src="https://img001.prntscr.com/file/img001/vomng5teQ_-g6lY9fungog.png"
          className="card-img-bottom"
          alt="..."
        />
      </div>
    </div>
  );
}

export default Features;
