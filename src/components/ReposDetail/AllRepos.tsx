import React from "react";
import { Repositories } from "../../api/Repos";
import ReposDetail from "./ReposDetail";

type AllReposProps = {
  repos: Repositories[];
}

const AllRepo  = ({ repos }: AllReposProps) => {
  return (
    <>
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>
            <ReposDetail repos={repo}/>
          </li>
        ))}
      </ul>
    </>
  );
};
export default AllRepo;
