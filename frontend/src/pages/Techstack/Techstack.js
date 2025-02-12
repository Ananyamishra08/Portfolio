import React from "react";
import "./techstack.css";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <div className="container techstack" id="techstack">
      <div className="container techstack-wrapper">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center content-para">
          👉 including programming Languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
        <div className="row">
          {TechstackList.map((tech, index) => (
            <div key={index} className="col-md-4 col-lg-3 col-sm-6 mb-3">
              <div className="card text-center p-3 shadow-sm">
                <span className="fs-2">{React.createElement(tech.icon)}</span>
                <h5 className="mt-2">{tech.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
