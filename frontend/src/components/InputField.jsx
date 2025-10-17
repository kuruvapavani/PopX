import React from "react";

const InputField = ({ label, id, type, value, onChange, placeholder, required }) => (
  <div className="relative mb-6">
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder || label}
      className="
        block px-2.5 pb-2.5 pt-4 w-full text-[14px] text-gray-900
        bg-transparent rounded-lg border border-[#C3C3C3] appearance-none 
        focus:outline-none focus:ring-0 focus:border-[#6C25FF] font-medium
      "
    />
    <label
      htmlFor={id}
      className="
        absolute text-[16px] text-[#8145fe]
        -translate-y-4 scale-75 top-1 left-0 px-2 z-10
        bg-[#F7F8F9] font-medium
      "
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  </div>
);

export default InputField;
