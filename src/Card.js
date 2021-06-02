import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

function Card({ info }) {
  console.log("card info", info);
  return (
    <div className="card shadow mb-5 bg-info">
      <img
        src={info.picture?.large}
        className="card-img-top rounded-circle img-thumbnail border-danger  "
        alt="card_image"
      />
      <div className="card-body text-center ">
        <h5 className="card-title">
          <span className="display-4">
            {info.name?.title} {info.name?.first} {info.name?.last}
          </span>
          <span className="display-6"> ({info.login?.username})</span>
        </h5>
        <h4 className="card-text ">Country : {info.location?.country}</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Age : {info.dob?.age}</li>
        <li className="list-group-item">Email : {info?.email}</li>
        <li className="list-group-item">Phone : {info?.phone}</li>
      </ul>
    </div>
  );
}

export default Card;
