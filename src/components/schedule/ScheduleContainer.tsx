import schedule from "../../data/schedule.json";

const ScheduleContainer: React.FC = () => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-sectionCard lg:flex-row lg:flex-wrap">
      {schedule.map((day, index) => (
        <div
          key={index}
          className={`flex-1 p-4 2xl:p-8 ${index !== schedule.length - 1 ? "border-b border-white lg:border-b-0 lg:border-r lg:border-white" : ""}`}
        >
          <div className="flex items-center pb-6">
            <div className="flex rounded-lg bg-scheduleDay p-1">
              <p className="md:text-md px-1 text-left text-xl font-light text-white 2xl:text-xl">
                {day.day}
              </p>
            </div>
            <p className="pl-4 text-left text-xl font-light">
              {day.hour ? day.hour + " - " + day.location : day.location}
            </p>
          </div>

          <p className="w-[255px] max-w-full text-left text-[32px] font-semibold md:text-[24px] lg:text-[32px]">
            {day.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ScheduleContainer;
