// src/context/AppContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    username: "@johndoe",
    email: "johndoe@example.com",
    number: "9876543210",
    bio: "I am a MERN stack developer passionate about building scalable apps.",
    image: "https://example.com/user.jpg",
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const value={user, setUser}

  return (
    <UserContext.Provider value={ value }>
      {children}
    </UserContext.Provider>
  );
};
