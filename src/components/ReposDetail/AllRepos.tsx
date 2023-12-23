import React from "react";
import { Repositories } from "../../api/Repos";
import ReposDetail from "./ReposDetail";

interface AllReposProps {
  repos: Repositories[];
}

const AllRepo: React.FC<AllReposProps> = ({ repos }) => {
  return (
    <>
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>
            <ReposDetail repo={repo}/>
          </li>
        ))}
      </ul>
    </>
  );
};
export default AllRepo;
