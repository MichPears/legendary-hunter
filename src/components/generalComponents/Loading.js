import React from "react";
import "../../scss/components/general-components/loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
