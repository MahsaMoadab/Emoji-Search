import React from "react";
import { Bars } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/";

export default function Loading() {
  return (
    <div className="loading">
      <Bars
        height="60"
        width="60"
        color="#2e2f3e"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>

  );
}
