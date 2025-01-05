import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto shadow-md rounded-b-lg">
        <div className="py-4 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img
              src="/assets/profile.jpg"
              alt="Dalena Nguyen"
              className="w-28 h-28 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">
                Dalena Nguyen
              </h1>
              <h2 className="text-xl text-text-secondary">
                Computer Science
              </h2>
              <p className="text-sm mt-1">
                Tampa FL, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
