import Head from "./components/Head";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import SidebarManager from "./utils/context/SidebarContext";
import QuestionPage from "./components/QuestionPage";

function App() {
  const appRouter = new createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/question",
          element: <QuestionPage />,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <SidebarManager>
        <Head />
        <RouterProvider router={appRouter}></RouterProvider>
      </SidebarManager>
    </div>
  );
}

export default App;
