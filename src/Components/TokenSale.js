import React from 'react';

export default function TokenSale() {
  return (
    <section id="token_sale" class="token_sale_area section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="section-title-white">Pre-Sale & Values</h2>
          <span></span>
          <p class="section-title-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
        <div class="row token_mb">
          <div
            class="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="pre_sale_area">
              <div class="single_presale">
                <h5>Private Pre-Sale</h5>
                <p>April 20, 2021</p>
              </div>
              <div class="single_presale">
                <h5>Pre-Sale</h5>
                <p>April 21, 2021</p>
              </div>
              <div class="single_presale">
                <h5>Crowdsale</h5>
                <p>Apr 28, 2021</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <div class="pre_sale_area">
              <div class="single_presale brright">
                <h5>Low - High 14h</h5>
                <p>$ 3,155.63 - $ 5,124.62</p>
              </div>
              <div class="single_presale brright">
                <h5>Total Token Sale</h5>
                <p>412,573 BCC (4.2%)</p>
              </div>
              <div class="single_presale brright">
                <h5>Acceptable Currency </h5>
                <p>BTC, ETH, LTC</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div class="buy-icons">
              <div class="ca-starts-in">
                <h3>
                  Token will start on July <br />
                  Fifteen 2021
                </h3>
                <div class="timer-area">
                  <div data-countdown="2021/7/15"></div>
                </div>
              </div>
              <h4>Pre Sale Starting In</h4>
              <a href="#" class="btn_one">
                Buy token now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
