// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Body from "./pages/Body.jsx";
import TodayList from "./pages/TodayList.jsx";
import Upcoming from "./pages/Upcoming.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
    ],
  },
  {
    path: "/today",
    element: <TodayList />,
  },
]);

export default appRoutes;
