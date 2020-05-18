import React from "react";
import Counter from "./Counter/Counter";
const Home = () => {
  return (
    <div className="container">
      <h1 className="main-heading">Home</h1>
      <div className="col-md-6 mx-auto text-center">
        <Counter></Counter>
      </div>
    </div>
  );
};

export default Home;
