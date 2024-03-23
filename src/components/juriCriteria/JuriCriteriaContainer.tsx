import juriCriteria from "../../data/juriCriteria.json";

const JuriCriteriaContainer: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {juriCriteria.map((criteria, index) => (
          <div key={index} className="w-72 h-96 mx-auto">
            <div className="h-full flex flex-col justify-between bg-background rounded-xl overflow-hidden shadow-xl dark:shadow-none border border-b-0 dark:border-b">
              <div className="flex justify-center pt-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-32 h-32 mx-auto">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
                    <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
                  </g>
                </svg>
              </div>
              <div className="flex justify-center px-4 py-2">
                <p className="mt-2 font-semibold text-lg text-center">{criteria.description}</p>
              </div>
              <div className="bg-gradient-to-r from-red-300 to-red-800 px-4 py-3">
                <p className="text-white text-center">{criteria.value}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JuriCriteriaContainer;
  