import React from "react";

import rules from "../../data/rules.json";

const RulesContainer: React.FC = () => {
  return (
    <div className="mx-auto w-full items-center justify-center md:w-1/2 md:px-8">
      {rules.map((rule, index) => (
        <div key={index} className="mb-3">
          <h3 className="mb-2 text-xl font-bold">{rule.rule}</h3>
          <p className="">{rule.text}</p>
        </div>
      ))}
    </div>
  );
};

export default RulesContainer;
