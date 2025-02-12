import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <div className="container mt-5">
      <Jumbotron />
      <div
        className="container-fluid d-flex p-0 m-0 flex-wrap"
        style={{ justifyContent: "space-between" }}
      >
        <Card
          title={"Card title"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Card
          title={"Card title"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Card
          title={"Card title"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Card
          title={"Card title"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
    </div>
    <Footer />
  </React.StrictMode>
);
