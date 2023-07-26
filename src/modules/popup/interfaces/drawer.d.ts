import { IRootPopup } from "@/modules/popup/interfaces/popup";
import { MutableRefObject, ReactElement } from "react";

export interface IDrawer {
  id: string;
  position: "left" | "right";
  children: ReactElement;
}

export interface IPopupParam {
  previous: MutableRefObject<IRootPopup>;
  setPopupsCb: (name: keyof IRootPopup, map: Map<string, ReactElement>) => void;
}
