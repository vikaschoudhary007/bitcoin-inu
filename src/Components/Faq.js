import React from 'react';

export default function Faq() {
  return (
    <section id="faq" class="faq1-area">
      <div class="container">
        <div class="section-title text-center">
          <h2>Frequently Asked Questions</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
        <div class="row">
          <div
            class="col-lg-10 offset-lg-1 col-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <ul class="faq-tab-menus nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="development-tab"
                  data-toggle="tab"
                  href="#development"
                  role="tab"
                  aria-selected="true"
                >
                  Development
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#design"
                  role="tab"
                  aria-selected="false"
                >
                  Design
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="compatibility-tab"
                  data-toggle="tab"
                  href="#compatibility"
                  role="tab"
                  aria-selected="false"
                >
                  Compatibility
                </a>
              </li>
            </ul>
            <div class="faq-tab-content tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="development"
                role="tabpanel"
              >
                <div class="faq_tab" id="accordion_1">
                  <div class="card active">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is cryptocurrency?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion_1"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What are the best cryptocurrency for buy?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion_1"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How to buy cryptocurrency?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion_1"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What is the refund policy?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordion_1"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="design" role="tabpanel">
                <div class="faq_tab" id="accordion_2">
                  <div class="card">
                    <div class="card-header" id="heading2Two">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse2Two"
                          aria-expanded="false"
                          aria-controls="collapse2Two"
                        >
                          What is cryptocurrency?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse2Two"
                      class="collapse"
                      aria-labelledby="heading2Two"
                      data-parent="#accordion_2"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="heading2Three">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse2Three"
                          aria-expanded="false"
                          aria-controls="collapse2Three"
                        >
                          What are the best cryptocurrency for buy?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse2Three"
                      class="collapse"
                      aria-labelledby="heading2Three"
                      data-parent="#accordion_2"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="heading3Four">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse2Four"
                          aria-expanded="false"
                          aria-controls="collapse2Four"
                        >
                          How to buy cryptocurrency?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse2Four"
                      class="collapse"
                      aria-labelledby="heading3Four"
                      data-parent="#accordion_2"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="compatibility" role="tabpanel">
                <div class="faq_tab" id="accordion_3">
                  <div class="card">
                    <div class="card-header" id="heading4Three">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse3Three"
                          aria-expanded="false"
                          aria-controls="collapse3Three"
                        >
                          What are the best cryptocurrency for buy?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse3Three"
                      class="collapse"
                      aria-labelledby="heading4Three"
                      data-parent="#accordion_3"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="heading4Four">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse3Four"
                          aria-expanded="false"
                          aria-controls="collapse3Four"
                        >
                          What is the refund policy?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse3Four"
                      class="collapse"
                      aria-labelledby="heading4Four"
                      data-parent="#accordion_3"
                    >
                      <div class="card-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
