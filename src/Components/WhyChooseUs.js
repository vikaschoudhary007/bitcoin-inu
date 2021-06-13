import React from 'react';

export default function WhyChooseUs() {
  return (
    <section class="why_choose_us section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h2>Why Choose us?</h2>
          <span></span>
          <p>
            If you want to be a part of one of the fastest developing coin, this
            is your chance. Our community is risk-taking, strong and independent
            making this a project worth trusting. Here are the top reasons why
            you SHOULD choose us.
          </p>
        </div>
        <div class="row text-center">
          <div
            class="col-lg-4 col-sm-4 col-xs-12 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div class="single_about">
              <img src="/img/blockchain.png" alt="icon-image" />
              <h4>Crowdfunded</h4>
              <p>
                “BINU“ Believes in unity, it’s fair launched and
                community-driven. The development teams united with the crowd by
                burning their tokens and participating with everyone else.
              </p>
            </div>
          </div>
          <div
            class="col-lg-4 col-sm-4 col-xs-12 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="single_about">
              <img src="/img/payment.png" alt="icon-image" />
              <h4>Automatic Liquid providor</h4>
              <p>
                Each trade will contribute to liquidity that would be generated
                automatically. The trade then goes to several pools as used by
                the exchanges
              </p>
            </div>
          </div>
          <div
            class="col-lg-4 col-sm-4 col-xs-12 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <div class="single_about">
              <img src="/img/order.png" alt="icon-image" />
              <h4>RFI (Reflect Finance) Static Reward</h4>
              <p>
                Token holders automatically earn the award fee through static
                reflection. No interface is needed to claim the fee, watch your
                BINU balance increase rapidly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
