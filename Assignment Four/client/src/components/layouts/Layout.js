import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
