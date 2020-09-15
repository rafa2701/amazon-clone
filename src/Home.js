import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Hero Banner"
          />

          <div className="home__row">
            <Product
              title="GTA V PC Game"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/916T5H6sCtL._AC_SL1500_.jpg"
              rating={5}
            />
            <Product
              id="49538094"
              title="Nintendo Switch Neon Edition 32 GB Console"
              price={399.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/31rTJsXrJqL.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="49558094"
              title="Google Pixel 4A - US Model - GSM Unlocked- 64GB"
              price={199.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/61C9GrXEp4L._AC_SS350_.jpg"
            />
            <Product
              id="49558194"
              title="7-in-1 Electric Pressure Cooker, 6 Quart, 14 One-Touch Programs"
              price={79.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/81i8c1fSkyL._AC_SL1500_.jpg"
            />
            <Product
              id="49558094"
              title="Apple AirPods with Charging Case (Wired)"
              price={89.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
            />
          </div>

          <div className="home__row">
            {/*Product */}
            <Product
              id="49558094"
              title="Sceptre Curved 27'' 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)"
              price={189.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/91C9kmKqlkL._AC_SL1500_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
