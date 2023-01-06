import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from "../page/formPage";
import TimelinePage from "../page/timelinePage";
import WorkbenchPage from "../page/workbench";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <WorkbenchPage></WorkbenchPage>,
      children: [
        {
          path: "form",
          element: <FormPage></FormPage>,
        },
        {
          path: "timeline",
          element: <TimelinePage></TimelinePage>,
        },
      ],
    },
  ],
  {
    basename: window.__POWERED_BY_QIANKUN__ ? "/workbench/mini-react18" : "/",
  }
);

function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
