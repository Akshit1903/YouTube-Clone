import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Body from "./Components/Body/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Watch from "./Components/Body/Watch";
import Results from "./Components/Body/Results";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Provider store={store}>
          <Header />
          <div className="flex">
            <SideBar />
            <Outlet />
          </div>
        </Provider>
      ),
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "watch",
          element: <Watch />,
        },
        {
          path: "results",
          element: <Results />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
