import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => navigate("/profile");

  return (
    <div className="min-h-screen w-full bg-[#f7f8f9] flex flex-col justify-start items-center px-4 pt-14">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-[#1D2226] mb-1">
          Signin to your <br /> PopX account
        </h1>
        <p className="text-[16px] text-[#7a7e81] font-medium mb-7 leading-normal">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <InputField
          label="Email Address"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
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
