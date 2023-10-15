import React from "react";
import "../styles/Loader.css";

export const Loader = () => {
  return (
    <div className="loaderContainer">
      <h1>loading</h1>
      <i className="bx bx-dots-horizontal-rounded bx-flashing bx-flip-vertical"></i>
    </div>
  );
};
