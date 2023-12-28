import React from "react";
import Layout from "../components/layouts/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="mb-2">About Us</h1>

        <p>
          Welcome to our online meal website! We are passionate about providing
          delicious and high-quality meals for various occasions. Whether you're
          planning a small gathering or a large event, we've got you covered.
        </p>

        <h2 className="mt-4">Our Services</h2>

        <div className="row">
          <div className="col-md-6">
            <h3>Food Catering</h3>
            <p>
              Our catering service brings a delightful culinary experience to
              your events. We offer a diverse menu to suit different tastes and
              ensure that your guests leave with a satisfied palate.
            </p>
          </div>

          <div className="col-md-6">
            <h3>Bulk Orders</h3>
            <p>
              Need a large quantity of delicious meals for an office gathering
              or special event? Our bulk ordering service allows you to enjoy
              mouth-watering dishes without compromising on quality.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2>Food Ordering</h2>
          <p>
            Explore our menu and experience the convenience of ordering food
            online. From individual meals to catering for events, we provide a
            seamless ordering process. Enjoy delicious dishes delivered right to
            your doorstep.
          </p>
        </div>

        <div className="mt-4">
          <h2>How It Works</h2>
          <p>
            Ordering food from us is simple and convenient. Explore our menu,
            place an order, and we'll take care of the rest. Whether it's a
            single meal or a bulk order, we ensure timely delivery and
            satisfaction with every bite.
          </p>
        </div>

        <div className="mt-4 mb-2">
          <h2>Contact Us</h2>
          <p>
            Have questions or want to discuss a customized order? Feel free to
            reach out to us. We're here to make your culinary experience
            exceptional!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
