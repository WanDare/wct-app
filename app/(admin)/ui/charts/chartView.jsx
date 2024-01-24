"use client";
import * as React from "react";
import { SparkLineChart } from "@mui/x-charts";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function TinyBarChart() {
  return (
    <div className="flex flex-row items-center dark:bg-gray-800 px-4 h-full w-2/6 justify-between rounded-lg">
      <div className="flex flex-col text-nowrap px-6">
        <span className="text-white">Total Views</span>
        <span className="text-white font-semibold tracking-widest text-xl">
          <VisibilityOutlinedIcon className="text-lg mr-2" />
          1.142.345
        </span>
        <span className="text-green-400">
          <ArrowUpwardIcon className="text-xs mr-2" />
          65.5%
        </span>
      </div>
      <SparkLineChart
        plotType="bar"
        data={[1, 2, 4, 6, 7, 6.5, 7, 9]}
        height={170}
        width={200}
        showTooltip
        showHighlight
        xAxis={{
          scaleType: "band",
          data: [
            new Date(2016, 0, 1),
            new Date(2017, 0, 1),
            new Date(2018, 0, 1),
            new Date(2019, 0, 1),
            new Date(2020, 0, 1),
            new Date(2021, 0, 1),
            new Date(2022, 0, 1),
            new Date(2023, 0, 1),
          ],
          valueFormatter: (value) => value.getFullYear(),
        }}
      />
    </div>
  );
}
