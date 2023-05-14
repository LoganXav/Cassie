import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useEffect, useState } from "react"
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import "./sass/main.scss";

const Layout = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Outlet />
      {showFooter && <Footer />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;







