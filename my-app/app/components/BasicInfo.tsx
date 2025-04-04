"use client";
import React, { useState } from "react";
import ReusableInput from "@/app/reusable/ReusableInput";
import Header from "@/app/reusable/Header";

const BasicInfo = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputGithub = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGithub(e.target.value);
  };

  const handleInputPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <div className="h-screen p-10 flex justify-center min-w-3xl bg-[#d9d9d9]">
      <div className="flex h-full gap-5">
        <div className="flex flex-col w-[400px]">
          <ReusableInput
            id="full-name"
            labelText="Full Name"
            type="text"
            onChange={handleInputName}
            className="mt-0"
          />
          <ReusableInput
            id="email"
            labelText="Email"
            type="email"
            onChange={handleInputEmail}
          />
          <ReusableInput
            id="github"
            labelText="Github"
            type="text"
            onChange={handleInputGithub}
          />
          <ReusableInput
            id="linkedin"
            labelText="Phone number"
            type="number"
            onChange={handleInputPhone}
          />
        </div>

        <div className="w-[700px] max-w-[700px] bg-[#f5f5f5]">
          <Header />
          <div className="w-full flex flex-col justify-center items-center h-[5rem]">
            <h2 className="text-[#333333] text-3xl font-medium">{fullname}</h2>
            <div>
              <p>{email}</p>
              <p>{github}</p>
              <p>{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
