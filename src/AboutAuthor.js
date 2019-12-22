import React from "react";
import "./components/styles.css";

const AboutAuthor = ({ name, imageUrl, githubUrl, email, description }) => {
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
                <img src="./github-logo.png" />
              </a>
            ) : null}
            {email ? (
              <>
                <img src="./email.png" />
                <span>{email}</span>
              </>
            ) : null}
          </div>
          <div className="authorDesc">{description}</div>
        </div>
      </div>
    </>
  );
};

export default AboutAuthor;
