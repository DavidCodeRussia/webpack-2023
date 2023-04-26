import * as $ from "jquery";
import Post from "@models/Post";
// import json from './assets/json';
// import xml from './assets/data.xml';
import React from "react";
import ReactDOM from "react-dom/client";
import csv from "./assets/data.csv";
import WebpackLogo from "./assets/webpack-logo.png";
import "./babel";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";

const App = () => {
  return (
    <div className="container">
      <h1>Webpack course</h1>

      <hr />

      <div className="logo"></div>

      <hr />

      <pre></pre>

      <hr />

      <div className="box">
        <h2>LESS</h2>
      </div>

      <div className="card">
        <h2>SCSS</h2>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const post = new Post("Webpack", WebpackLogo);
$("pre").addClass("code").html(post.toString());

console.log("csv", csv);
