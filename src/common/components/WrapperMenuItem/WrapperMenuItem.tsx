import styles from "./wrapperMenuItem.module.scss";
import { ReactElement, useRef } from "react";
import { useRipple } from "@/common/hooks/useRipple";
import { Button } from "@/common/ui/Button/Button";

interface IProps {
  icon: ReactElement;
  title: string;
  onClick: () => void;
}

export const WrapperMenuItem = ({ icon, title, onClick }: IProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ripples = useRipple(ref, { background: "var(--conversation-ripple)" });

  return (
    <div role='presentation' onClick={onClick} ref={ref} className={styles.container}>
      <Button notHover size={"sm"} isIcon>
        {icon}
      </Button>
      <div>{title}</div>
      {ripples}
    </div>
  );
};
