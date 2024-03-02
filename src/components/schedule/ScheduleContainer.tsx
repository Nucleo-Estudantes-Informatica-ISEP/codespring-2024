import schedule from "../../data/schedule.json";

const ScheduleContainer: React.FC = () => {
    return (
        <div className="w-full rounded-lg dark:bg-[#3b3b3b] bg-secondary flex">
            {schedule.map((day, index) => (
                <div key={index} className={`flex-1 pl-8 py-8 ${index !== schedule.length - 1 ? 'border-r border-white' : ''}`}>
                    <div className="flex items-center flex-1 pb-4">
                        <div className="bg-neutral-400 dark:bg-[#000614] p-1 flex">
                            <p className="text-white text-xl font-light text-left px-1">{day.day}</p>
                        </div>
                        <p className="text-xl font-light text-left pl-4">{day.hour ? day.hour + " - " + day.location : day.location}</p>
                    </div>

                    <p className="w-[255px] max-w-full text-[32px] font-semibold text-left">{day.title}</p>
                </div>
            ))}
        </div>
    );
};

export default ScheduleContainer;
