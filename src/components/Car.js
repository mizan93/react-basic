import React from "react";

function Car({ car }) {
  if (car === "Symphony") {
    throw new Error("Symphony is not a car");
  }
  return (
    <div>
      <h1>Car: {car}</h1>{" "}
    </div>
  );
}

export default Car;
