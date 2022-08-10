import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../scss/components/layout/layout.scss";
import Searchbar from "../Searchbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header /> <Searchbar />
      {children}
      <Footer />
    </div>
  );
}
