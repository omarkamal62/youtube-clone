import Header from "./Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const Layout = () => {
  const menuExpansion = useSelector((state) => state.ui.menuExpansion);

  return (
    <>
      <Header />

      <div className="app__page">
        <Sidebar />
        <main className={`${!menuExpansion ? "shrinked" : ""}`}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
