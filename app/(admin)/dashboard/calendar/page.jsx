import React from "react";

export default function calendar() {
  return (
    <div class="relative z-0 flex flex-col min-w-0 p-3 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
      <div data-toggle="calendar" id="calendar"></div>
    </div>
  );
}
