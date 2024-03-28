import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/lib/components/ui/accordion";

import questions from "../../data/faq.json";

const QuestionsContainer: React.FC = () => {
  return (
    <Accordion className="w-full" type="single" collapsible>
      {questions.map((question, index) => (
        <AccordionItem
          className="min-h-12"
          value={question.question}
          key={index}
        >
          <AccordionTrigger className="text-left">
            {question.question}
          </AccordionTrigger>
          <AccordionContent>{question.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default QuestionsContainer;
