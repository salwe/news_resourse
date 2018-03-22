import React from "react";

import { MainNav } from "../components/MainNav";
import { Header } from "../components/Header";

export const PageTemplate = (props) => {
  return(
    <div className="main">
      <Header />
      <MainNav />
      {props.children}
    </div>
  );
};