import React from 'react';

export default function Calculator() {
  return (
    <section id="bitcoin" class="bitcoin_area">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 text-center wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div class="currency_content">
              <h3>Bitcoin</h3>
              <h5>to Currency Calculator</h5>
              <p>
                Lorem Idivsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              {/* <script
                src={process.env.PUBLIC_URL + '/js/calc_widget.js'}
              ></script> */}

              <a href="#" class="btn_one">
                Buy Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
