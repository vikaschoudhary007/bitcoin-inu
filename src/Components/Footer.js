import React from 'react';

export default function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-6 offset-lg-3 col-sm-12 col-xs-12 text-center">
            <div class="newsletter-form">
              <h2>Subscribe for get updates</h2>
              <form action="#" class="subscribe">
                <input
                  type="text"
                  class="subscribe__input"
                  placeholder="Enter your Email"
                />
                <button type="button" class="subscribe__btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="footer_profile">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer_copyright">
              <p>&copy; 2021 Bitcoin Inu. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
