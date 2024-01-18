import React from "react";
import Form from "../../ui/form/form";
import Login from "../../ui/login/login";

export default function ElementsUi() {
  return (
    <div className="flex gap-20 my-5">
      <div className="flex flex-wrap flex-col gap-20">
        <Form />
        <Login />
      </div>
    </div>
  );
}
