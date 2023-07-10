import React from "react";

export default function Logo({ logo, title }) {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <span>{title}</span>
    </div>
  );
}
