import React from "react";
import "./components/styles.css";
const githubIcon = require("./components/images/github.svg");

const AboutAuthor = ({ name, imageUrl, githubUrl, description }) => {
  return (
    <>
      <div className="authorSection">
        <div className="authorImg">
          <img src={imageUrl} />
        </div>
        <div className="authorDetails">
          <div className="authorName">
            <strong>{name}</strong>
            {githubUrl ? (
              <a href={githubUrl} target="_blank">
                <img src={githubIcon} />
              </a>
            ) : null}
          </div>
          <div className="authorDesc">{description}</div>
        </div>
      </div>
    </>
  );
};

export default AboutAuthor;
