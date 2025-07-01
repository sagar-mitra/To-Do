// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Body from "./pages/Body.jsx";
import TodayList from "./pages/TodayList.jsx";
import Upcoming from "./pages/Upcoming.jsx";
import Login from "./pages/Login.jsx";

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
        path: "/today",
        element: <TodayList />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
  },
]);

export default appRoutes;
