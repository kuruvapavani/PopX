import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingInput = ({ label, id, type, value, onChange, placeholder }) => (
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
        focus:outline-none focus:ring-0 focus:border-[#6C25FF] peer font-medium
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
      {label}
    </label>
  </div>
);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ← useNavigate hook

  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F8F9] flex flex-col justify-start items-center px-4 pt-14 font-[Poppins]">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-[#1D2226] mb-1">
          Signin to your <br/> PopX account
        </h1>
        <p className="text-[16px] text-[#7a7e81] font-medium mb-7 leading-normal">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <FloatingInput
          label="Email Address"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <FloatingInput
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button
          type="button"
          className="w-full bg-[#cbcbcb] text-white py-3 rounded-md font-medium text-[16px] hover:bg-[#5a1fdc] transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
