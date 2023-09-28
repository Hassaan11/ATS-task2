import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="d-flex">
        <Sidebar />
        <div className="homecontainer d-flex-col w-100">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
