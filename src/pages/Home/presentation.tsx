import React from "react";
import { Hero } from "../../modules/Hero/presentation";
import { Navbar } from "../../modules/Navbar/presentation";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};
