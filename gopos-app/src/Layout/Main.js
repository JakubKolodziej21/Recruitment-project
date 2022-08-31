import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="Main">
      <Outlet />
    </main>
  );
};

export default Main;
