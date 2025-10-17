import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen w-full bg-[#f7f8f9] flex flex-col justify-end items-center px-4 pb-8">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold text-[#1D2226] mb-1">
          Welcome to PopX
        </h1>
        <div className="mb-6">
          <p className="text-[16px] text-[#7a7e81] leading-snug font-medium">
            Lorem ipsum dolor sit amet,
          </p>
          <p className="text-[16px] text-[#7a7e81] leading-snug font-medium">
            consectetur adipiscing elit,
          </p>
        </div>
        <Link
          to="/register"
          className="block w-full text-center bg-[#6c25ff] text-white py-3 rounded-md font-medium text-[16px] mb-3"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="block w-full text-center bg-[#CCB9FA] py-3 rounded-md font-medium text-[16px]"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
