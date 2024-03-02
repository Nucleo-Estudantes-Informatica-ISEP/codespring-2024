import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from "@/lib/components/ui/accordion";
  
  import schedule from "../../data/schedule.json";
  
  const QuestionsContainer: React.FC = () => {
    return (
      <Accordion className="my-8 w-full" type="single" collapsible>
        {schedule.map((item, index) => (
          <AccordionItem
            className="min-h-12"
            value={item.day}
            key={index}
          >
            <AccordionTrigger>{item.hour}</AccordionTrigger>
            <AccordionContent>{item.location}</AccordionContent>
            <AccordionContent>{item.title}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  
  export default QuestionsContainer;
  