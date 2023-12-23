import { Repositories } from "./Repos";
import { instance } from "./env";

type GetReposParams = {
  page: string;
  pageLimit?: string;
  name:string
};

type GetReposSuccessResponse = {
  repos: Repositories [];
  page: string;
  count:number;
}

export const getRepos = async (
  params: GetReposParams
): Promise<GetReposSuccessResponse> => {
  const {page, pageLimit, name } = params;
  const response = await instance.get(
    `/users/${name}/repos?page=${page}&per_page=${pageLimit}`);
  console.log(response);
  return response.data;
  //https://api.github.com/users/%60$%7Bname%7D/repos?page=${page}&per_page=${pageLimit}`
};
