// MyTabs.js
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyMap from "./Map";

const MyTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Map Tab</Tab>
      </TabList>

      <TabPanel>
        <h2>Content for Tab 1</h2>
      </TabPanel>

      <TabPanel>
        <MyMap lng={10.4515} lat={51.1657} />
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;
