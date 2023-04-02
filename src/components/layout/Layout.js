import Header from "./Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="app__page">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
