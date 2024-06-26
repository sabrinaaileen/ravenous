import React from "react";
import Ramen from "./images/Ramen.jpeg";

function Business() {
  const business = {
    image: Ramen,
    name: "Ramen-Shop",
    address: "Ramen Street 1",
    city: "Ramen City",
    state: "Ramen State",
    zipcode: "10101",
    category: "Ramen",
    rating: "5.0",
    reviewcount: "289",
  };
  return (
    <div>
      <img src={business.image} alt={business.name} width="200px" />
      <p>{business.name}</p>
    </div>
  );
}

export default Business;
