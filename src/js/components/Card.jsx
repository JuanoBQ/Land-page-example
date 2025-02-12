import React from "react";

const Card = (props) => {
  const { title, description } = props;
  return (
    <div className="card col-lg-2 col-md-6 mb-3">
        <img
          src="https://gnrgindustrial.com/images/blog/1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">{title}</h5>
          <p className="card-text d-flex justify-content-center">
            {description}
          </p>
          <hr />
          <a href="#" className="btn btn-primary d-flex justify-content-center">
            Find out more!
          </a>
        </div>
    </div>
  );
};

export default Card;
