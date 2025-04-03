"use client";
import React, { useState } from "react";
import BasicInput from "./BasicInput";

const BasicInfo = () => {
  const [fullname, setFullName] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  return (
    <div className="h-screen p-10 flex justify-center min-w-3xl bg-[#d9d9d9]">
      <div className="flex h-full gap-5">
        <div className="flex flex-col w-[400px]">
          <BasicInput
            id="full-name"
            labelText="Full Name"
            type="text"
            onChange={handleInput}
            className="mt-0"
          />
          <BasicInput id="email" labelText="Email" type="email" />
          <BasicInput id="github" labelText="Github" type="text" />
          <BasicInput id="linkedin" labelText="Phone number" type="number" />
        </div>
        
        <div className="w-[700px] max-w-[700px] bg-[#f5f5f5]">
          <div className="w-full flex justify-center items-center bg-[#0e374f] h-[5rem]">
            <h2 className="text-[#e6e6e6] text-3xl font-bold">{fullname}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
