import ReactDOM from "react-dom/client";
import { RouterCustomProvider } from "@/common/components/RouterProvider";
import { ToastContainer } from "react-toastic";
import { PopupContainer } from "@/modules/popup/components/PopupContainer";

import "@/styles/index.scss";
import "react-toastic/dist/style.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <RouterCustomProvider />
    <ToastContainer />
    <PopupContainer />
  </>,
);
