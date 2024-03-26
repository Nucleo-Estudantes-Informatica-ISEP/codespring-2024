import React, { useState } from "react";
import { motion } from "framer-motion";

import schedule from "../../data/schedule.json";

const DEFAULT_ID = schedule[0]?.id;

const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState(DEFAULT_ID);

  function isActiveDay(day: number) {
    return day === activeDay;
  }

  function getActiveDay() {
    return schedule.find((day) => day.id === activeDay);
  }

  function handleDayClick(id: number) {
    setActiveDay(id);
  }

  function getButtonStyles(id: number) {
    return isActiveDay(id) ? "bg-primary" : "bg-section-card";
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-6 flex w-full flex-col justify-center lg:flex-row">
        {schedule.map(({ id, date, name }) => (
          <motion.button
            key={id}
            className={`
                    ${getButtonStyles(id)} text-md w-full
                     border-slate-300 px-4 py-3 uppercase transition-all
                      duration-200 hover:brightness-90 md:text-lg lg:text-xl`}
            onClick={() => handleDayClick(id)}
          >
            {`${name} - ${date}`}
          </motion.button>
        ))}
      </div>
      <div
        className={`min-h-48 bg-section-card py-3 ${
          getActiveDay()?.events.length === 4
            ? "grid w-full lg:grid-cols-4"
            : "grid w-full lg:grid-cols-2"
        }`}
      >
        {getActiveDay()?.events.map((event, index) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            key={event.description}
            className={`px-4 py-6 md:py-8 ${
              index !== getActiveDay()!.events.length - 1
                ? "border-b border-white lg:border-b-0 lg:border-r"
                : ""
            }`}
          >
            <div className="mb-6 flex items-center">
              <p className="md:text-md rounded-lg bg-secondary px-3 py-0.5 text-center align-middle text-xl font-light md:py-1 lg:text-xl">
                {event.startTime}
              </p>
              <p className="ml-3 text-left text-xl font-light capitalize">
                {event.location}
              </p>
            </div>
            <p className="w-full min-w-[255px] text-left text-xl font-semibold capitalize lg:text-2xl">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;
