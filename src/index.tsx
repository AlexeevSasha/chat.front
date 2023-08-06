import ReactDOM from "react-dom/client";
import "@/styles/index.scss";
import { RouterCustomProvider } from "@/common/components/RouterProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<RouterCustomProvider />);
