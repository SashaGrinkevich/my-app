import { instance } from "./env";


export interface User {
    user(user: any): { payload: User[]; type: "users/setUsers"; };
    userId: any;
    login: string;
    id: number | string;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
   
}

type GetUserParams = { name: User['id'] };

type GetuserSuccessResponse = User;

export const getUser = ({
    name,
}: GetUserParams) :Promise<GetuserSuccessResponse> =>{
    return instance
    .get(`/users/${name}`)
    .then((res)=>res.data)
}