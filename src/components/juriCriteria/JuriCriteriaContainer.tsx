import type { IconType } from "react-icons/lib";
import juriCriteria from "../../data/juriCriteria.json";
import { TbTarget } from "react-icons/tb";
import { MdMessage } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { FaCheckSquare } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const iconMap: { [key: string]: IconType } = {
  tbTarget: TbTarget,
  mdMessage: MdMessage,
  piMedal: PiMedal,
  faCheckSquare: FaCheckSquare,
  mdRocketLaunch: MdRocketLaunch,
};

const JuriCriteriaContainer: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {juriCriteria.map((criteria, index) => {
          const IconComponent = iconMap[criteria.icon]; // Get the corresponding icon component
          if (!IconComponent) return null; // Return null if icon is not found
          return (
            <div key={index} className="w-60 h-[400px] mx-auto">
              <div className="h-full flex flex-col justify-between bg-background rounded-xl overflow-hidden shadow-xl dark:shadow-none border border-b-0 dark:border-b">
                <div className="flex justify-center pt-12">
                  <IconComponent className="w-24 h-24 mx-auto" />
                </div>
                <div className="flex justify-center px-4 py-2">
                  <p className="mt-2 font-bold text-lg text-center">{criteria.description}</p>
                </div>
                <div className="bg-gradient-to-r from-red-300 to-red-800 px-4 py-3">
                  <p className="text-white text-center">{criteria.value}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JuriCriteriaContainer;
