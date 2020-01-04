import React from "react";
import "./components/styles.css";
const githubIcon = require("./components/images/github.svg");

const Author = ({ name, imageUrl, githubUrl, description }) => {
  return (
    <>
      <hr className="separator" />
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
      <hr className="separator" />
    </>
  );
};

export default Author;
