import { instance } from "./env";
import { User } from "./getUser";

export type GetUsersSuccessResponse = {
    total: string;
    page: string;
    user: User[];
  };

export type GetUsersParams = {
    page:string;
    search:string;
}

export const getSearchUsers = (
    params: GetUsersParams
): Promise<GetUsersSuccessResponse> => {
    const {search, page} = params;
    return instance
    .get(`/search${search}/${page}`)
    .then((res) => res.data);   
};