import React from "react";

import stats from "../../data/stats.json";

const StatsContainer: React.FC = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid w-full max-w-screen-lg grid-cols-1 justify-center gap-x-64 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <span className="text-6xl font-bold text-accent md:text-7xl lg:text-8xl">
              {stat.title}
            </span>
            <span className="mt-2 text-xl md:text-2xl lg:text-3xl">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsContainer;
