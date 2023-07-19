import { ThemeEnum } from "@/common/types/theme";

export const ThemeDecorator = (theme: ThemeEnum) => (Story) => {
  document.documentElement.dataset.theme = theme;
  return <Story />;
};
