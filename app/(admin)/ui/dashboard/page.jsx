import React from "react";
import Chart from "../chart/chart";
import Users from "../users/users";
import Card from "../card/card";

const DashboardsUi = () => {
  return (
    <div>
      <Chart />
      <Users />
      <div className="flex gap-20 my-5">
        <div className="flex flex-wrap flex-row gap-2">
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
