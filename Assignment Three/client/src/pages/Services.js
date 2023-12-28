import React from "react";
import Layout from "../components/layouts/Layout";
import "../styles/ServicesStyle.css";
import foodcatering from "../img/catering.png";
import bulkorder from "../img/bulkorder.png";
import foodOrdering from "../img/bb.jpg";
const Services = () => {
  return (
    <Layout>
      <section id="services-container">
        <h1 class="Services-title">Our Services</h1>
        <div id="services">
          <div class="box">
            <img src={foodcatering} alt="Image not found" />
            <h2 class="Services-text">Food Catering</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quas recusandae, ad rem quasi deleniti, tenetur eos doloremque
              quis facere exercitationem deserunt consectetur,
            </p>
          </div>
          <div class="box">
            <img src={bulkorder} alt="Image not found" />
            <h2 class="Services-text">Bulk order</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quas recusandae, ad rem quasi deleniti, tenetur eos doloremque
              quis facere exercitationem deserunt consectetur,
            </p>
          </div>
          <a href="/FoodOrdering">
            <div class="box">
              <img src={foodOrdering} alt="Image not found" />
              <h2 class="Services-text">Food Ordering</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores quas recusandae, ad rem quasi deleniti, tenetur eos
                doloremque quis facere exercitationem deserunt consectetur,
              </p>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
