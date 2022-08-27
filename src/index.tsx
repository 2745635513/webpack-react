import React, { useState } from "react";
import ReactDOM from "react-dom";

function Person() {
  let [user, setUser] = useState("张三");
  return (
    <div>
      <h1>今天{user}去七宝老街了，中午的人数不是很多，吃了葱油饼很油腻</h1>
      <button onClick={()=> user === '张三' ? setUser('李四') : setUser('张三') }>换人去逛街</button>
    </div>
  );
}

ReactDOM.render(<Person />, document.getElementById("app")); //低于react v18
// v18-react
// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<Person/>);
