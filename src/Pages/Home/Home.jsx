import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="layout">
        <div className="home-nav">
          <Navbar />
        </div>
        <div className="home-main">
          <div className="home-left">
            <Sidebar />
          </div>
          <div className="home-right">
            <div className="home-head">
              <h2>Home</h2>
            </div>
            <div className="certificate-wrapper">
              <div className="certificate-header">
                <h2>Learn how to create a certificate</h2>
              </div>
              <div className="certificate-steps">
                <div className="verifywrapper">
                  <div className="verify-svg">
                    <img
                      src="https://www.findoc.com/app_themes/images/OS_7.svg"
                      alt=""
                    />
                  </div>
                  <h2>Verify yourself (KYC)</h2>
                  <h4>
                    Lock in your identity by completing <br /> your KYC and you
                    are ready to go!
                  </h4>
                </div>
                <div className="verifywrapper">
                  <div className="verify-svg">
                    <svg
                      fill="none"
                      height="90"
                      viewBox="0 0 24 24"
                      width="90"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="#141414"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path d="m4.75 14.75v1.5c0 1.6569 1.34315 3 3 3h8.5c1.6569 0 3-1.3431 3-3v-1.5" />
                        <path d="m12 14.25v-9.25" />
                        <path d="m8.75 8.25 3.25-3.5 3.25 3.5" />
                      </g>
                    </svg>
                  </div>
                  <h2>Upload your work</h2>
                  <h4>
                    This is the most important part. <br /> Upload your idea or
                    creation here.
                  </h4>
                </div>
                <div className="verifywrapper">
                  <div className="verify-svg">
                    <img
                    src="https://www.findoc.com/app_themes/images/OS_7.svg"
                    alt=""
                  />
                    {/* <svg
                      fill="none"
                      height="90"
                      viewBox="0 0 24 24"
                      width="90"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m9 12 2 2 4.5-4.5m2.4012-4.50149c.2059.49802.6012.89389 1.0989 1.10056l1.7451.72291c.4981.2063.8938.60201 1.1001 1.10008.2063.49806.2063 1.05768 0 1.55575l-.7224 1.74399c-.2064.4983-.2067 1.0585.0007 1.5565l.7211 1.7435c.1022.2467.1549.5111.1549.7781.0001.2671-.0525.5315-.1547.7782-.1022.2468-.252.4709-.4408.6597-.1889.1888-.4131.3386-.6598.4407l-1.7439.7224c-.4981.2059-.8939.6012-1.1006 1.0989l-.7229 1.7452c-.2063.4981-.6019.8938-1.1 1.1001-.498.2063-1.0576.2063-1.5557 0l-1.7439-.7224c-.4981-.2058-1.0575-.2054-1.5552.0012l-1.74521.7219c-.49777.2058-1.05688.2056-1.55452-.0005-.49764-.2062-.89312-.6014-1.09956-1.0989l-.72309-1.7458c-.20592-.498-.60118-.8939-1.09887-1.1006l-1.74519-.7229c-.49783-.2062-.8934-.6017-1.09978-1.0994-.20637-.4978-.20665-1.0572-.00078-1.5552l.72236-1.7439c.20579-.4981.20537-1.0575-.00116-1.5553l-.72133-1.74652c-.10227-.24668-.15493-.5111-.15497-.77815-.00004-.26704.05253-.53148.15472-.7782.10219-.24671.25199-.47088.44085-.65968.18885-.1888.41305-.33853.6598-.44065l1.74393-.72238c.49757-.20575.89318-.60052 1.1-1.09766l.72288-1.74525c.2063-.49807.602-.89378 1.10004-1.10008.49805-.20631 1.05765-.20631 1.5557 0l1.74388.72239c.4981.20579 1.0575.20537 1.5553-.00117l1.7459-.7201c.498-.20619 1.0574-.20615 1.5554.00012.4979.20626.8936.60186 1.0999 1.09979l.7231 1.74577z"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg> */}
                  </div>
                  <h2>Get certified</h2>
                  <h4>
                    Voila! Your IP has been registered and <br /> you have a
                    certificate to prove it.
                  </h4>
                </div>
              </div>
              <div className="create-button">
                <button> Create Certificate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
