import schedule from "../../data/schedule.json";

const ScheduleContainer: React.FC = () => {
    return (
        <div className="w-full rounded-lg bg-sectionCard flex flex-col lg:flex-row lg:flex-wrap">
            {schedule.map((day, index) => (
                <div key={index} className={`flex-1 p-4 2xl:p-8 ${index !== schedule.length - 1 ? 'border-b border-white lg:border-b-0 lg:border-r lg:border-white' : ''}`}>
                    <div className="flex items-center pb-4">
                        <div className="bg-scheduleDay p-1 flex">
                            <p className="text-white text-xl md:text-md 2xl:text-xl font-light text-left px-1">{day.day}</p>
                        </div>
                        <p className="text-xl font-light text-left pl-4">{day.hour ? day.hour + " - " + day.location : day.location}</p>
                    </div>

                    <p className="w-[255px] max-w-full text-[32px] md:text-[24px] lg:text-[32px] font-semibold text-left">{day.title}</p>
                </div>
            ))}
        </div>
    );
};

export default ScheduleContainer;
