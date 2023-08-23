import { FC, createContext, ReactElement } from "react";
import { useTheme } from "@/common/hooks/useTheme";
import { useSocket } from "@/common/hooks/useSocket";

type ContextType = ReturnType<typeof useTheme> & ReturnType<typeof useSocket>;

export const AppContext = createContext<ContextType>({} as ContextType);

export const ContextProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const theme = useTheme();
  const { socket } = useSocket();
  return <AppContext.Provider value={{ ...theme, socket }}>{children}</AppContext.Provider>;
};
