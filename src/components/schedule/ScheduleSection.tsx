import React, { useState } from "react";

import schedule from "../../data/schedule.json";

interface ScheduleSectionProps {
  children?: React.ReactNode;
}

const ScheduleSection: React.FC<ScheduleSectionProps> = () => {
  const DEFAULT_ID = schedule[0]?.id;

  const [activeDay, setActiveDay] = useState(DEFAULT_ID);

  const isActiveDay = (day: number) => day === activeDay;

  const activeDayButtonStyles = (id: number) =>
    ` ${isActiveDay(id) ? "bg-primary" : "bg-gray-600"}`;

  const handleDayClick = (id: number) => {
    setActiveDay(id);
  };

  const getActiveDay = () => {
    return schedule.find((day) => day.id === activeDay);
  };

  return (
    <>
      <div className="container flex w-full flex-col items-center justify-center">
        <div className="mb-6 flex w-full flex-col justify-center lg:flex-row">
          {schedule.map((day) => {
            const { id, date, name } = day;

            return (
              <button
                key={id}
                className={`
                    ${activeDayButtonStyles(id)}
                    text-md w-full border-2 border-slate-400 px-4 py-3 uppercase transition-all duration-300 hover:brightness-75 md:text-lg lg:text-xl`}
                onClick={() => handleDayClick(id)}
              >
                {`${name} - ${date}`}
              </button>
            );
          })}
        </div>
        <div
          className={`bg-sectionCard ${
            getActiveDay()?.events.length === 4
              ? "grid w-full lg:grid-cols-4"
              : "grid w-full lg:grid-cols-2"
          }`}
        >
          {getActiveDay()?.events.map((event, index) => (
            <div
              key={index}
              className={`flex-1 px-4 py-6 2xl:py-8 ${
                index !== getActiveDay()!.events.length - 1
                  ? "border-b border-white lg:border-b-0 lg:border-r lg:border-white"
                  : ""
              }`}
            >
              <div className="flex items-start pb-6">
                <div className="flex rounded-lg bg-scheduleDay p-1">
                  <p className="md:text-md px-1 text-left text-xl font-light text-white 2xl:text-xl">
                    {event.startTime}
                  </p>
                </div>
                <p className="pl-4 text-left text-xl font-light">
                  {event.location}
                </p>
              </div>
              <p className="w-[255px] max-w-full text-left text-[16px] font-semibold capitalize md:text-[16px] lg:text-[24px]">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScheduleSection;
