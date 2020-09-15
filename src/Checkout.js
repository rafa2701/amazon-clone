import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { motion } from "framer-motion";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* Test Product */}
          {/* <CheckoutProduct
          id='12345678'
          title='Rocketskying to the Moon'
          image='https://images-na.ssl-images-amazon.com/images/I/61aqiCPKwcL._AC_SL1280_.jpg'
          price={199.99}
          rating={5} /> */}
          <motion.div
            transition={{ ease: "easeOut", duration: 1 }}
            initial="false"
            variants={variants}
          >
            {basket.map((item) => (
              <CheckoutProduct
                // ref={ref}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
