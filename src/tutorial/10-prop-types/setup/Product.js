import React from "react";
import PropTypes from "prop-types";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  const newUrl =
    "https://ethereum.org/static/754d2f72ce2296fb59d9d974aeda16be/1e993/future_transparent.webp";
  return (
    <article className="product">
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
      <img src={url || newUrl} alt={name} />
    </article>
  );
};

// Product.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: {
//     url: "https://ethereum.org/static/754d2f72ce2296fb59d9d974aeda16be/1e993/future_transparent.webp",
//   },
// };

export default Product;
