import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";

export default function Layout() {
  return (
    <div className="body">
      <Header />
      <div className="main-content-container">
        <main className="main-content">
          <Outlet />
        </main>
        <Navigation />
      </div>
      <Footer />
    </div>
  );
}
