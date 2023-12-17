
import { User } from "./getUser";
import { instance } from "./env";

type GetUsersParams = { 
    page:string;
    name?:string
    pageLimit?:string
    repos:string
 };


type GetUsersSuccessResponse = {
    
    users: User[];
    page?:string
    
  };


export const getUsers = (
    params: GetUsersParams
): Promise<GetUsersSuccessResponse> => {
    const {page,pageLimit,name} = params;

    return instance
    .get(`/users/${name}/repos?page=${page}&per_page=${pageLimit}`, 
    {
        params:{ page,pageLimit },
    }) //https://api.github.com/users/%60$%7Bname%7D/repos?page=${page}&per_page=${pageLimit}`
    .then((res)=>res.data)
    
}
