import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import RecommendedVideos from "./pages/RecommendedVideos";
import SearchPage from "./pages/Search";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <RecommendedVideos />,
        },
        {
          path: "search/:searchTerm",
          element: <SearchPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
