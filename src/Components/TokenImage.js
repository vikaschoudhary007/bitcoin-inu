import React from 'react';

export default function TokenImage() {
  return (
    <section class="token_img_area section-padding">
      <div class="container">
        <div class="row text-center">
          <div
            class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="token-img">
              <h4>Token Distribution</h4>
              <img src="/img/01-Chat.png" class="img-fluid" alt="" />
            </div>
          </div>
          <div
            class="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="fund-img">
              <h4>Fund Distribution</h4>
              <img src="/img/02-Chat.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
