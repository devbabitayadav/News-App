import React from "react";

const Spinner = () => {
  return (
    <div className="container2 p-5 bg-secondary text-center">
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden text-dark">Loading...</span>
      </div>
      <h1 className="text-dark">Loading....</h1>
    </div>
  );
};

export default Spinner;
