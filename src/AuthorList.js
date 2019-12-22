import React from "react";
import AboutAuthor from "./AboutAuthor";
import config from "../config";

const { authors } = config;

const AuthorList = () => {
  return (
    <div>
      {Object.values(authors).map(
        ({ name, imageUrl, githubUrl, email, description }, index) => (
          <>
            <hr className="separator" />
            <AboutAuthor
              name={name}
              imageUrl={imageUrl}
              githubUrl={githubUrl}
              email={email}
              description={description}
            />
            {index === 3 && <hr className="separator" />}
          </>
        )
      )}
    </div>
  );
};

export default AuthorList;
