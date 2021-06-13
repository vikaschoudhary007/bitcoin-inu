import React from 'react';

export default function Home() {
  return (
    <section id="home" className="home_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
            <div className="hero-text">
              <h2>The Next-Gen Crypto</h2>
              <p>
                "Bitcoin Inu" is a crowdfunded, fair launched DeFi token listed
                on Binance Smart Chain.
                <br />
                "BINU " is a wholly community-driven project with booming
                potential. It primarily has three functions- Reflection, LP
                Acquisition and burning to enhance the decentralisation of your
                tokens.
              </p>
              <div className="home_btn">
                <a
                  href="#"
                  className="btn_one wow bounceIn"
                  data-wow-delay=".6s"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="btn_two wow bounceIn"
                  data-wow-delay=".8s"
                >
                  learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
