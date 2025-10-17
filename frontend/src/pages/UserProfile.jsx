import React from "react";
import { FaCamera } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const UserProfile = () => {
  return (
    <div className="max-w-md mx-auto bg-[#f7f8f9] rounded shadow min-h-screen">
      <div className="border-b px-6 py-4 bg-white">
        <h2 className="text-gray-800 font-medium text-lg">Account Settings</h2>
      </div>
      <div className="flex items-center px-6 py-4 space-x-4">
        <div className="relative w-16 h-16">
          <img
            src={avatar}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full flex items-center justify-center">
            <FaCamera className="text-white w-2 h-2" />
          </span>
        </div>

        <div>
          <div className="text-gray-900 font-semibold">Marry Doe</div>
          <div className="text-gray-500 text-sm">Marry@Gmail.Com</div>
        </div>
      </div>

      <div className="px-6 pb-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat,
          Sed Diam
        </p>
      </div>
      <div className="border border-dashed border-gray-200"></div>
    </div>
  );
};

export default UserProfile;
