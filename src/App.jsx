import { Tabs } from "react-tabs";
import React from "react";
import MyTabs from "./components/MyTabs";
import "./App.css";
import Instructions from "./Instructions/Instructions";

export default function App() {
  return (
    <div className="App">
      <Instructions />
      <div className="block">
        Insert your components here
        <MyTabs />
      </div>
    </div>
  );
}
