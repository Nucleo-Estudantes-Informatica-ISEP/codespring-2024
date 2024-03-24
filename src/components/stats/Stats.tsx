import React from "react";

import stats from "../../data/stats.json";

const StatsContainer: React.FC = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid w-full max-w-screen-lg grid-cols-1 justify-center gap-6 font-sans sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <span className="text-5xl font-extrabold text-accent md:text-6xl lg:text-7xl">
              {stat.title}
            </span>
            <span className="mt-2 text-lg font-bold md:text-xl lg:text-2xl">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsContainer;
