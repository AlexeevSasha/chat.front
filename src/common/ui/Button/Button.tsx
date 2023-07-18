import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/common/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonColor, ButtonSize } from "@/common/types/button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onlyIcon?: boolean;
  fullWith?: boolean;
  color?: ButtonColor;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({ children, ...attr }: ButtonProps) => {
  const buildClass = classNames(cls.button, {
    [cls[attr.color]]: !!attr.color,
    [cls[attr.size]]: !!attr.size,
    [cls.fullWith]: attr.fullWith,
    [cls.icon]: attr.onlyIcon,
  });

  return (
    <button className={buildClass} {...attr}>
      {children}
    </button>
  );
};
