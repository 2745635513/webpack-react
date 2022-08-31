import React from "react";
import "../style/home.less";
import Children from "../components/HomeNoteCard";

function Home() {
  return (
    <div className="content">
      <div className="content-list">
        {noteList.map((ele, index) => {
          return <Children key={index} ele={ele} />;
        })}
      </div>
    </div>
  );
}

export default Home;

const noteList = [
  {
    title: "史记类",
    children: [
      {
        id: "1",
        title: "明朝那些事",
        author: "当年明月",
      },
      {
        id: "2",
        title: "大明王朝",
        author: "刘和平",
      },
    ],
  },
  {
    title: "IT类",
    children: [
      {
        id: "100",
        title: "JS入门到入土",
        author: "frace",
      },
      {
        id: "101",
        title: "React熟练使用",
        author: "frace",
      },
    ],
  },
  {
    title: "文学类",
    children: [
      {
        id: "3",
        title: "平凡的世界",
        author: "路遥",
      },
      {
        id: "4",
        title: "杀死一只知更鸟",
        author: "哈伯·李",
      },
    ],
  },
  {
    title: "人物传记",
    children: [
      {
        id: "5",
        title: "小米创业时代",
        author: "雷军 徐洁云",
      },
      {
        id: "6",
        title: "邓小平时代",
        author: "傅高义",
      },
    ],
  },
];
