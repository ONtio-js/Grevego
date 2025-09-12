import React from "react";

const InputField = ({
  label,
  type,
  name,
  onchange,
  placeholder,
  value,
}: {
  label?: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="my-1 w-full">
      <label className="block font-medium text-gray-600 capitalize" htmlFor="">
        {label}
      </label>
      <div className="mt-1 w-full rounded-lg border-2 border-gray-200 bg-transparent py-3 pl-5">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onchange}
          name={name}
          value={value}
          className="w-full border-none bg-transparent outline-none focus:border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputField;
