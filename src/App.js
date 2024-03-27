import RecipeDetails from "./components/recipeDetails";
import Front from "./components/header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/loginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Front />,
      children: [
        {
          path: "/recFinder",
          element: <RecipeDetails />,
        },
        {
          path: "/log",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
