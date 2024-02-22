import React from "react";

const TestimonialsSection = () => {
  return (
    <section
      className="section-testimonials partsec2 slidetrans tochangesize"
      id="testimonials"
    >
      <div className="part11 tochangesize">
        <div className="testimonials-container tochangesize">
          <span className="subheading tochangesize">Testimonials</span>
          <h2 className="heading-secondary tochangesize">
            Once you try it, you cant go back
          </h2>

          <div className="testimonials tochangesize">
            <div className="testi-background slidetrans ">
              <figure className="testimonial ">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Dave Bryson"
                  src="../src/assets/images/img/customers/dave.jpg"
                />
                <blockquote className="testimonial-text ">
                  {
                    "Exceptional service! The team was punctual and efficient. Our home looks amazing. Highly recommend this locally."
                  }
                </blockquote>
                <p className="testimonial-name">&mdash; Dave Bryson</p>
              </figure>
            </div>

            <div className="testi-background slidetrans">
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Ben Hadley"
                  src="../src/assets/images/img/customers/ben.jpg"
                />
                <blockquote className="testimonial-text">
                  {
                    "Quick response and professional work. The technician fixed our issue swiftly. We're thrilled with the service!"
                  }
                </blockquote>
                <p className="testimonial-name">&mdash; Ben Hadley</p>
              </figure>
            </div>

            <div className="testi-background slidetrans">
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Steve Miller"
                  src="../src/assets/images/img/customers/steve.jpg"
                />
                <blockquote className="testimonial-text">
                  {
                    "Reliable childcare support. Our nanny is wonderful and trustworthy. A true blessing for busy parents in our community."
                  }
                </blockquote>
                <p className="testimonial-name">&mdash; Steve Miller</p>
              </figure>
            </div>

            <div className="testi-background slidetrans">
              <figure className="testimonial">
                <img
                  className="testimonial-img"
                  alt="Photo of customer Hannah Smith"
                  src="../src/assets/images/img/customers/hannah.jpg"
                />
                <blockquote className="testimonial-text">
                  {
                    "Great local eats! The restaurant offers delicious dishes and warm ambiance. A must-visit spot in our neighborhood."
                  }
                </blockquote>
                <p className="testimonial-name">&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="part22 tochangesize">
        <div className="gallery tochangesize">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
            <figure
              className="gallery-item slidetrans tochangesize"
              key={index}
            >
              <img
                src={`../src/assets/images/image/allservice/${index}.jpg`}
                alt={`Photo of beautifully arranged food ${index}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
