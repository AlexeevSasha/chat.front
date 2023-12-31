import { IDrawer } from "@/modules/popup/interfaces/drawer";
import { drawer } from "@/modules/popup/helpers/drawer";
import { useDebouncePopup } from "@/modules/popup/hooks/useDebouncePopup";
import { classNames } from "@/common/lib/classNames/classNames";
import styles from "./drawer.module.scss";

export const Drawer = (props: IDrawer) => {
  const { closeModal, isClose } = useDebouncePopup({
    cb: () => drawer.close(props),
    delay: 250,
  });

  return (
    <div className={styles.drawer}>
      <div
        className={classNames(styles.content, {
          [styles.contentRight]: props.position === "right",
          [styles.contentRightClose]: props.position === "right" && isClose,
          [styles.contentClose]: isClose,
        })}
      >
        {props.children}
      </div>
      <div
        data-testid='close-drawer'
        role='presentation'
        onClick={closeModal}
        className={classNames(styles.backdrop, {
          [styles.backdropClose]: isClose,
        })}
      />
    </div>
  );
};
