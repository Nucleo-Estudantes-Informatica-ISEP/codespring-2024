
import juriCriteria from "../../data/juriCriteria.json";
import { Target, Atom, MessageSquareText, Rocket, Lightbulb, Sparkle } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  target: Target,
  message: MessageSquareText,
  lightbulb: Lightbulb,
  atom: Atom,
  rocket: Rocket,
};

const JuriCriteriaContainer: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap justify-center w-full max-w-8xl">
        {juriCriteria.map((criteria, index) => {
          const IconComponent = iconMap[criteria.icon]; 
          if (!IconComponent) return null; 
          return (
            <div key={index} className="w-52 h-[375px] mx-1 mb-4">
              <div className="h-full flex flex-col justify-between bg-background rounded-xl overflow-hidden shadow-xl dark:shadow-none border-2 border-b-0 dark:border-2">
                <div className="flex justify-center pt-12">
                  <IconComponent className="w-24 h-24 mx-auto" />
                </div>
                <div className="flex justify-center px-4 py-2">
                  <p className="mt-2 font-bold text-lg text-center">{criteria.description}</p>
                </div>
                <div className="bg-criteriaValue px-4 py-3">
                  <p className="text-white font-semibold text-lg text-center">{criteria.value}%</p>
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
