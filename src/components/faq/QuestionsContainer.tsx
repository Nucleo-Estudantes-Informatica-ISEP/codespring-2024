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
      {questions.map((question) => (
        <AccordionItem
          className="min-h-12 bg-background"
          value={question.question}
          key={question.question}
        >
          <AccordionTrigger className="text-left md:text-lg">
            {question.question}
          </AccordionTrigger>
          <AccordionContent className="mt-1 md:text-base">
            {question.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default QuestionsContainer;
