import React from "react";
import Users from "../users/users";
import Card from "../card/card";
import CardLineChart from "../charts/chart2";
import CardBarChart from "../charts/chart3";
import { Card2 } from "../card/card2";

const DashboardsUi = () => {
  return (
    <div>
      <CardLineChart />
      <Users />
      <CardBarChart />
      <div className="flex gap-20 my-5">
        <div className="flex flex-wrap flex-row gap-2">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default DashboardsUi;
