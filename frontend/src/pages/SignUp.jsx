import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState("No");

  const handleSignUp = () => navigate("/profile");

  return (
    <div className="min-h-screen w-full bg-[#f7f8f9] min-h-screen flex flex-col justify-start items-center px-4 pt-4 font-[Poppins]">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-semibold text-[#1D2226] mb-8">
          Create your <br /> PopX account
        </h1>

        <InputField
          label="Full Name"
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          required
        />
        <InputField
          label="Phone Number"
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
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
        <InputField
          label="Company Name"
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter your company name"
          required
        />

        {/* Radio Input */}
        <div className="mb-6">
          <label className="text-[16px] mb-2 block">
            Are you an Agency? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1 text-gray-700">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={isAgency === "Yes"}
                onChange={(e) => setIsAgency(e.target.value)}
              />
              Yes
            </label>
            <label className="flex items-center gap-1 text-gray-700">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={isAgency === "No"}
                onChange={(e) => setIsAgency(e.target.value)}
              />
              No
            </label>
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-[#6c25ff] text-white py-3 rounded-md font-medium text-[16px] hover:bg-[#5a1fdc] transition"
          onClick={handleSignUp}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
