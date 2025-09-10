import React from "react";
import UserProfileCard from "../components/UserProfileCard";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
       <UserProfileCard/>
      </main>
    </div>
  );
};

export default Home;
