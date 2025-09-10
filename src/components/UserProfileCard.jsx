import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/AppContext";

const UserProfileCard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="max-w-6xl mx-auto mt-8 p-10 rounded-2xl shadow-xl flex items-center gap-10 bg-gradient-to-r from-blue-50 via-white to-blue-100 border border-blue-200 hover:shadow-blue-200 transition-all duration-300">
      {/* Left: Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={user.image}
          alt="User Profile"
          className="w-56 h-56 rounded-2xl object-cover shadow-lg border-4 border-blue-300"
        />
      </div>

      {/* Right: User Info */}
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold text-blue-800">{user.name}</h2>
        <p className="text-xl text-blue-600 font-medium">{user.username}</p>
        <p className="text-lg text-gray-700">{user.email}</p>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
          Hi, I’m {user.name.split(" ")[0]} 👋. I am a{" "}
          <span className="text-blue-700 font-semibold">
            MERN stack developer
          </span>{" "}
          {user.bio}
        </p>
        <Link to="/profile">
          <button className="mt-4 px-7 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 w-fit">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfileCard;
