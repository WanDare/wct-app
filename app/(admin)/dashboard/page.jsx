"use client";
import React from "react";
import DashboardsUi from "../ui/dashboard/page";
import withAuth from "../authconfig";

const Dashboards = () => {
  return (
    <div>
      <DashboardsUi />
    </div>
  );
};

// Wrap Dashboards component with withAuth HOC
export default withAuth(Dashboards);
