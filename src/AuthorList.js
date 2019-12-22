import React from "react";
import AboutAuthor from "./AboutAuthor";
import config from "../config";

const { authors } = config;

const AuthorList = () => {
  return (
    <div>
      {Object.values(authors).map(
        ({ name, imageUrl, githubUrl, email, description }) => (
          <AboutAuthor
            name={name}
            imageUrl={imageUrl}
            githubUrl={githubUrl}
            email={email}
            description={description}
          />
        )
      )}
    </div>
  );
};

export default AuthorList;
