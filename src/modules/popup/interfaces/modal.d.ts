import { ReactElement } from "react";

export interface IModal {
  id: string;
  title: string;
  children: (id) => ReactElement;
}
