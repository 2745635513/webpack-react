import React from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import {
  HeartOutlined,
  HomeOutlined,
  OneToOneOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import "../style/header.less";

function header() {
  return (
    <div className="note-header">
      <div className="note-header-content">
        <div className="logo">
          <Link to="/">
            <Image
              width={120}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Link>
        </div>
        <div className="time">
          {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          <span className="icon-label">
            <HeartOutlined />
            加为收藏
          </span>
          <span className="icon-label">
            <HomeOutlined />
          </span>
          <span className="icon-label">
            <OneToOneOutlined />
          </span>
          <span className="icon-label">
            <AppstoreOutlined />
          </span>
        </div>
        <div className="login">
          <span className="icon-label">登入</span>
        </div>
      </div>
    </div>
  );
}

export default header;
