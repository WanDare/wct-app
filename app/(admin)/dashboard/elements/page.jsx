import React from "react";
import Form from "../../ui/form/form";
import Login from "../../ui/login/login";
import Forum from "../../../components/contact_forum";

export default function ElementsUi() {
  return (
    <div className="flex gap-20 my-5">
      <div className="flex flex-wrap flex-row gap-20">
        <div>
          <h1 className="text-3xl pb-3">Contact Form</h1>
          <Forum />
        </div>
        <Login />
        <Form />
      </div>
    </div>
  );
}
