import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import AppsModule from "../module/apps";
import MainModule from "../module/main";
import RolesModule from "../module/roles";
import UsersModule from "../module/users";
import LoginPage from "../page/login/login";
import WorkbenchPage from "../page/workbench/workbench";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/workbench",
    element: <WorkbenchPage></WorkbenchPage>,
    children: [
      {
        path: "",
        element: <MainModule></MainModule>,
        children: [
          {
            path: "apps",
            element: <AppsModule></AppsModule>,
          },
          {
            path: "system/users",
            element: <UsersModule></UsersModule>,
          },
          {
            path: "system/roles",
            element: <RolesModule></RolesModule>,
          },
        ],
      },
      {
        path: "mini-react18/*",
        element: <div id="mini-react18"></div>,
      },
      {
        path: "mini-vue2/*",
        element: <div id="mini-vue2"></div>,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
