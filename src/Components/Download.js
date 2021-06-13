import React from 'react';

export default function Download() {
  return (
    <section id="download" class="download_area section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h2>Get The App</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div class="app-text">
              <h2>Download the app today</h2>
              <p>
                We offers users a fully operational long-term rental platform.
                It plans to leverages blockchain technology to ensure seamless
                rental experience and wants to help tenants unfreeze millions of
                dollars tied up in rental.
              </p>
              <ul>
                <li>
                  <span class="ti-user"></span>Create Profile
                </li>
                <li>
                  <span class="ti-download"></span>Download It for Free
                </li>
                <li>
                  <span class="ti-cup"></span>Enjoy this app
                </li>
              </ul>
              <div class="app_btn">
                <a href="#" class="btn_three wow bounceIn" data-wow-delay=".3s">
                  <i class="fa fa-apple"></i>App Store
                </a>
                <a href="#" class="btn_four wow bounceIn" data-wow-delay=".4s">
                  <i class="fa fa-play"></i>Google Play
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div class="app_download_img">
              <img src="/img/app-mockup-2.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
