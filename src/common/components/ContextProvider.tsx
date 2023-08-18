import { FC, createContext, ReactElement } from "react";
import { useTheme } from "@/common/hooks/useTheme";

type ContextType = ReturnType<typeof useTheme>;

export const AppContext = createContext<ContextType>({} as ContextType);

export const ContextProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const theme = useTheme();
  return <AppContext.Provider value={{ ...theme }}>{children}</AppContext.Provider>;
};
