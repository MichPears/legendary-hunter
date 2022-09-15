import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../scss/components/layout/layout.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
