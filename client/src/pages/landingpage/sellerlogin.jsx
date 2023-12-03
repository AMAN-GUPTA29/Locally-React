import React from "react";

const SellerLoginSection = () => {
  return (
    <section className="slidetrans">
      <div className="seller-login">
        <h2 className="heading-secondary marghead">
          Wanna become a service provider click below
        </h2>
        <div className="container grid grid--2-cols grid--center-v">
          <div>
            <p className="step-description">
              {
                " Local service providers, seize the opportunity to thrive on our platform. Connect with a community hungry for local expertise. Whether it's home services, culinary delights, or professional assistance, we offer the tools and support for your local business to flourish. Join us today and together, we'll strengthen our community while boosting your business's success. Be part of something extraordinary—connect and grow your local presence now!"
              }
            </p>
          </div>
          <div className="padd">
            <a
              href="/seller/login"
              className="btn btn--full margin-right-sm margbutton"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerLoginSection;
