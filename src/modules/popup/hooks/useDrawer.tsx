import { useCallback } from "react";
import { IDrawer, IPopupParam } from "@/modules/popup/interfaces/drawer";
import { Drawer } from "@/modules/popup/components/drawer/Drawer";

export const useDrawer = ({ previous, setPopupsCb }: IPopupParam) => {
  const addDrawer = useCallback(
    ({ detail }: { detail: IDrawer }) => {
      const map = previous.current["drawer"];
      map.set(
        detail.id,
        <Drawer key={detail.id} position={detail.position} id={detail.id}>
          {detail.children}
        </Drawer>,
      );
      setPopupsCb("drawer", map);
    },
    [previous],
  );

  const deleteDrawer = useCallback(
    ({ detail }: { detail: IDrawer }) => {
      const map = previous.current["drawer"];
      map.delete(detail.id);
      setPopupsCb("drawer", map);
    },
    [previous],
  );

  return { addDrawer, deleteDrawer };
};
