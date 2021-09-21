import React from "react";
import FirstPage from "./FirstPage";
import "../styles/home.scss";
import SecondPage from "./SecondPage";

export default function Home() {
  return (
    <div className="home">
      <FirstPage />
      <SecondPage />
    </div>
  );
}
