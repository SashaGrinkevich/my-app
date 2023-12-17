import React from "react";

import { ReactComponent as GitHub } from "../assets/icon/Icons/GitHub.svg";
import { ReactComponent as Search } from "../assets/icon/Icons/Search.svg";


const icons = {

  github: GitHub,
  search: Search,

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
