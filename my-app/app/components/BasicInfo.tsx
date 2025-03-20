import React from "react";
import BasicInput from "./BasicInput";
import "../../assets/styles/basicInfo.scss";

const BasicInfo = () => {
  return (
    <div>
      <div className="max-w-[350] ">
        <BasicInput id="full-name" labelText="Full Name" type="text" />
        <BasicInput id="email" labelText="Email" type="email" />
        <BasicInput id="github" labelText="Github" type="text" />
        <BasicInput id="linkedin" labelText="Phone number" type="number" />
      </div>
    </div>
  );
};

export default BasicInfo;
