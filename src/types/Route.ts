import { DocumentNode } from "graphql";

export type Route = {
  path?: string;
  id: string;
  menuIndex?: number;
  component?: JSX.Element;
  query?: DocumentNode;
  queryVariables?: {
    stockType?: string;
  };
  icon?: JSX.Element;
  submenu?: boolean;
  disabled?: boolean;
};
