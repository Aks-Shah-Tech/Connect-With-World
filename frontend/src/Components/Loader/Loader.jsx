import React from "react";
import { Triangle } from "react-loader-spinner";
import "./Loader.css";
const Loader = () => {
  return (
    <>
      <div className="loadingPage">
        <Triangle
          height="100"
          width="100"
          color="rgb(80, 110, 207)"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loader;
