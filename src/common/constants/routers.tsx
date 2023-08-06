import { Navigate } from "react-router-dom";
import { SignInPage } from "@/pages/SignInPage";
import { SignUpPage } from "@/pages/SignUpPage";
import { paths } from "@/common/constants/paths";

export const AuthProviderPaths = [
  { path: paths.login, element: <SignInPage /> },
  { path: paths.register, element: <SignUpPage /> },
  { path: paths["404"], element: <Navigate to={"/login"} /> },
];
