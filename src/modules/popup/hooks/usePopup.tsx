import { useEffect } from "react";
import { EventBusNamesEnum } from "@/modules/popup/interfaces/eventBusNames";
import { useDrawer } from "@/modules/popup/hooks/useDrawer";
import { IPopupParam } from "@/modules/popup/interfaces/drawer";
import { drawer } from "@/modules/popup/helpers/drawer";

export const usePopup = ({ setPopupsCb, previous }: IPopupParam) => {
  const { addDrawer, deleteDrawer } = useDrawer({ setPopupsCb, previous });

  useEffect(() => {
    drawer.on(EventBusNamesEnum.OPEN_DRAWER, addDrawer);
    drawer.on(EventBusNamesEnum.CLOSE_DRAWER, deleteDrawer);

    return () => {
      drawer.off(EventBusNamesEnum.OPEN_DRAWER, addDrawer);
      drawer.off(EventBusNamesEnum.CLOSE_DRAWER, deleteDrawer);
    };
  }, []);
};
