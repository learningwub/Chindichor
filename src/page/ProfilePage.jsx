import React, { useContext } from "react";
import { UserContext } from "../context/AppContext";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated User Data:", user);
    alert("Profile Updated Successfully ✅");
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-blue-200">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex-shrink-0">
            <img
              src={user.image}
              alt="Profile Preview"
              className="w-32 h-32 rounded-2xl object-cover shadow-md border-2 border-blue-300"
            />
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="number"
          value={user.number}
          onChange={handleChange}
          placeholder="Phone Number"
          className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="bio"
          value={user.bio}
          onChange={handleChange}
          rows="4"
          placeholder="Write something about yourself..."
          className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="mt-3 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 w-fit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;