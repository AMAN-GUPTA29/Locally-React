import React from "react";

const CompanyInfoSection = () => {
  return (
    <section className="part-sec slidetrans tochangesize">
      <div className="part1 tochangesize tochangesize2">
        <h2 className="heading-secondary secondary-changes tochangesize tochangesize2">
          How we started. . .
        </h2>

        <p className="content-para tochangesize tochangesize2">
          Locally is a local startup that provides various local services to its
          customers. The company connects local service providers with people in
          their community who needed those services.
        </p>
        <p className="content-para tochangesize tochangesize2">
          The idea for Locally came about when the founders noticed that many
          local service providers in their area were struggling to reach
          customers online. They realized that there was a need for a platform
          that would make it easier for local service providers to connect with
          customers and for customers to find the services they needed in their
          area.
        </p>

        <p className="content-para tochangesize tochangesize2">
          Locally is a startup that provides local services by connecting
          service providers with customers in their community. The idea for
          Locally came from a need to help .
        </p>
      </div>
      <div className="part2 tochangesize tochangesize2">
        <h2 className="heading-secondary secondary-changes postion-change tochangesize tochangesize2">
          Future Plans. . .
        </h2>

        <p className="content-para-2 tochangesize tochangesize2">
          At Locally, we are committed to providing high-quality and reliable
          services to our customers while continuing to grow and expand our
          business. Here are some of our key future plans:
        </p>
        <div className="content-para-2 tochangesize ">
          <ul style={{ listStyleType: "none" }}>
            <li className="list-style tochangesize">
              Expand our service offerings
            </li>
            <li className="list-style tochangesize">
              Increase our service coverage area
            </li>
            <li className="list-style tochangesize">
              Improve our technology platform
            </li>
            <li className="list-style tochangesize">
              Build partnerships with other local businesses
            </li>
            <li className="list-style tochangesize">
              Hire and train more staff
            </li>
            {/* <li className="list-style">Focus on sustainability</li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
