import React from 'react';

export default function Contact() {
  return (
    <section id="contact" class="contact_us section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h2>Get In Touch</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
        <div class="row">
          <div
            class="col-lg-5 col-sm-6 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <h4 class="contact_title">
              Contact with us for <br /> more information.
            </h4>
            <div class="single_address">
              <div class="address_br">
                <span class="ti-mobile"></span>
              </div>
              <p>+512 513 96324</p>
            </div>
            <div class="single_address">
              <div class="address_br">
                <span class="ti-email"></span>
              </div>
              <p>example@example.com</p>
            </div>
            <div class="single_address">
              <div class="address_br">
                <span class="ti-location-pin"></span>
              </div>
              <p>3481 Melrose Place, Beverly Hills</p>
            </div>
            <div class="single_address">
              <div class="address_br">
                <span class="ti-alarm-clock"></span>
              </div>
              <p>Mon to Sat 9:00am to 5:00pm</p>
            </div>
          </div>
          <div class="col-lg-7 col-sm-12 col-xs-12">
            <div class="contact">
              <form
                class="form"
                name="enq"
                method="post"
                action="http://ekramit.net/tf/coincap-demo/coincap/contact.php"
                onsubmit="return validation();"
              >
                <div class="row">
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <input
                      type="text"
                      name="subject"
                      class="form-control"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <textarea
                      rows="6"
                      name="message"
                      class="form-control"
                      placeholder="Your Message"
                      required="required"
                    ></textarea>
                  </div>
                  <div class="col-md-12 text-center">
                    <button
                      type="submit"
                      value="Send message"
                      name="submit"
                      id="submitButton"
                      class="btn_one"
                      title="Submit Your Message!"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
