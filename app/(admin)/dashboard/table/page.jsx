import React from "react";
import CardLineChart from "../../ui/charts/chart2";
import CardBarChart from "../../ui/charts/chart3";
import PieActiveArc from "../../ui/charts/piechart";
import BarsDataset from "../../ui/charts/chart4";

export default function Table() {
  return (
    <div>
      <CardLineChart />
      <CardBarChart />
      <div className="flex flex-wrap gap-10 my-5">
        <PieActiveArc />
        <BarsDataset />
      </div>
    </div>
  );
}
