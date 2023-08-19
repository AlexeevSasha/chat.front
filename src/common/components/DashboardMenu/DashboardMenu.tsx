import { menu } from "@/common/constants/menu";

import styles from "./dashboardMenu.module.scss";

export const DashboardMenu = () => {
  return (
    <div className={styles.container}>
      {menu.map((el) => (
        <div key={el.name}>{el.element}</div>
      ))}
    </div>
  );
};
