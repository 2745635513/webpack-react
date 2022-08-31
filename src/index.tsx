import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Entery from "./Entery";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Entery />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
); //低于react v18
// v18-react
// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<Person/>);
