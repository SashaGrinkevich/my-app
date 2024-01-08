import React from "react";

import { ReactComponent as GitHub } from "../assets/icon/Icons/GitHub.svg";
import { ReactComponent as Search } from "../assets/icon/Icons/Search.svg";
import { ReactComponent as Followers } from "../assets/icon/Icons/users.svg"
import { ReactComponent as Following } from "../assets/icon/Icons/user.svg"

const icons = {

  github: GitHub,
  search: Search,
  followers: Followers,
  following: Following,
  

};

export type IconType = keyof typeof icons; // search | github ;
// export type IconType = search | github ;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: IconType;
}

const Icon: React.FC<IconProps> = ({ type, ...props }) => {

  const Element = icons[type];
  return <Element {...props} />;
};

export default Icon;
