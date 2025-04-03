import React from "react";
import { Input } from "@heroui/input";

interface Info {
  id: string;
  type: string;
  labelText: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BasicInput = ({
  id,
  type,
  labelText,
  className,
  onChange, // value
}: Info) => {
  return (
    <div className="w-full">
      <Input
        className={`mt-3 ${className}`}
        id={id}
        type={type}
        label={labelText}
        onChange={onChange}
      />
    </div>
  );
};

export default BasicInput;
