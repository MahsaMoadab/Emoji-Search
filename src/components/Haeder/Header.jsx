import React from "react";
import Logo from "../Logo/Logo";
import Theme from "../Theme/Theme";

export default function Header() {
  return (
    <div className="navbar">
      <Logo logo="./assets/images/logo.svg" title="Emoji" />
      <Theme />
    </div>
  );
}
