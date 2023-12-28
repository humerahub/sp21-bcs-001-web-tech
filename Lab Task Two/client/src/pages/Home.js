import React from "react";
import Layout from "../components/layouts/Layout";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div>
        <section id="Home">
          <h1 className="h-primary">Welcome to MyOnlineMeal</h1>
          <p>
            We provide the best service in this city where you can enjoy the
            yummiest food
          </p>
          <a href="/Services">
            <button className="btn-order">Order now</button>
          </a>
        </section>

        <section id="contact-section">
          <h1 className="contact-us">Contact Us</h1>
          <div id="contact">
            <form action="#">
              <div className="contact-items">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="contact-items">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="contact-items">
                <label htmlFor="number">Phone Number: </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="contact-items">
                <label htmlFor="message">Message: </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className="btn-submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
