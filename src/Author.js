import React from "react";
import "./components/styles.css";

const Author = ({ name, imageUrl, githubUrl, description }) => {
  return (
    <>
      <h2 className="communitySection">About author</h2>
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
                <img src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/github-icon.svg" />
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
