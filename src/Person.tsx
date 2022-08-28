import React, { useState } from "react";
function Person() {
  const [user, setUser] = useState("张三");
  return (
    <div>
      输入：<input type="text" />
      <h1>今天{user}去七宝老街了，中午的人数不是很多，吃了葱油饼很油腻</h1>
      <button onClick={()=> user === '张三' ? setUser('李四') : setUser('张三') }>换人去逛街</button>
    </div>
  );
}

export default Person;