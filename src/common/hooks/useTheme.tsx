import { useEffect, useState } from "react";
import { ThemeEnum } from "@/common/types/theme";
import { getTheme } from "@/common/helpers/getTheme";

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeEnum>(getTheme());

  useEffect(() => {
    if (!theme) return;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
