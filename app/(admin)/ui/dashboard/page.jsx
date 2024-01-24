import React from "react";
import Users from "../users/users";
import Card from "../card/card";
import CardLineChart from "../charts/chart2";
import CardBarChart from "../charts/chart3";
import { Card2 } from "../card/card2";
import PieActiveArc from "../charts/piechart";
import BarsDataset from "../charts/chart4";
import TinyBarChart from "../charts/chartView";
import LikeChart from "../charts/chartLike";
import ShareChart from "../charts/chartShare";
import CommentChart from "../charts/chartComment";

const DashboardsUi = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-10 my-5">
        <LikeChart />
        <TinyBarChart />
        <ShareChart />
        <CommentChart />
        <PieActiveArc />
        <BarsDataset />
        <Users />
      </div>
      <div>
        <CardLineChart />
        <Users />
        <CardBarChart />
      </div>
      <div className="flex gap-20 my-5">
        <div className="flex flex-wrap flex-row gap-2">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default DashboardsUi;
