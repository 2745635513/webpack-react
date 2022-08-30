import React from "react";
import ReactDOM from "react-dom";

import Person from './Person';


ReactDOM.render(<Person />, document.getElementById("app")); //低于react v18
// v18-react
// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<Person/>);
