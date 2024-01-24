"use client";
import * as React from "react";
import { SparkLineChart } from "@mui/x-charts";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
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

export default function LikeChart() {
  return (
    <div className="flex flex-row items-center dark:bg-gray-800 px-5 h-full w-2/6 justify-between rounded-lg">
      <div className="flex flex-col text-nowrap px-6">
        <span className="text-white">Total Likes</span>
        <span className="text-white font-semibold tracking-widest text-xl">
          <ThumbUpOutlinedIcon className="text-lg mr-2" />
          222.345
        </span>
        <span className="text-green-400">
          <ArrowUpwardIcon className="text-xs mr-2" />
          47.03%
        </span>
      </div>
      <SparkLineChart
        data={[1, 4, 2, 5, 7, 2, 4, 6]}
        xAxis={{
          scaleType: "time",
          data: [
            new Date(2022, 5, 1),
            new Date(2022, 5, 2),
            new Date(2022, 5, 5),
            new Date(2022, 5, 6),
            new Date(2022, 5, 7),
            new Date(2022, 5, 8),
            new Date(2022, 5, 11),
            new Date(2022, 5, 12),
          ],
          valueFormatter: (value) => value.toISOString().slice(0, 10),
        }}
        height={170}
        width={200}
        showTooltip
        showHighlight
      />
    </div>
  );
}
