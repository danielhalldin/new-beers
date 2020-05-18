import { DocumentNode } from "graphql";

export type Route = {
  path: string;
  id: string;
  menuIndex?: number;
  component?: JSX.Element;
  icon?: JSX.Element;
  submenu?: boolean;
};
