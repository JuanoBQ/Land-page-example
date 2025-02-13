import React from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
        <>
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
        </>

	);
};

export default Home;