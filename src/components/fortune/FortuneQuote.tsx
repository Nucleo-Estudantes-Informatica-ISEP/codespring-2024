import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SettingsIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/lib/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/lib/components/ui/drawer";
import { Toaster } from "@/lib/components/ui/sonner";

const API_BASE_URL = "https://api.quotable.io/random";
const DEFAULT_REFRESH_INTERVAL_MINUTES = 5;
const MAX_QUOTE_LENGTH = 80;
const AVAILABLE_REFRESH_INTERVALS = [1, 5, 10, 15, 30, 60];

// full list here: https://api.quotable.io/tags
const themes = [
  "technology",
  "motivational",
  "success",
  "philosophy",
  "wisdom",
  "humurous",
  "stupidity",
  "health",
  "change",
  "creativity"
];

const FortuneQuote: React.FC = () => {
  const [quote, setQuote] = useState("...");
  const [author, setAuthor] = useState("...");
  const [error, setError] = useState<string | null>(null);

  const [quoteRefreshRate, setQuoteRefreshRate] = useState(
    DEFAULT_REFRESH_INTERVAL_MINUTES
  );
  const [currentQuoteInterval, setCurrentQuoteInterval] = useState(
    DEFAULT_REFRESH_INTERVAL_MINUTES
  );

  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch(
        `${API_BASE_URL}?tags=${themes.join("|")}&maxLength=${MAX_QUOTE_LENGTH}`
      );

      if (!res.ok) setError("Failed to fetch quote");
      const data = await res.json();

      setQuote(data.content);
      setAuthor(data.author);
      setError(null);
    };

    if (intervalRef.current) clearInterval(intervalRef.current);
    else fetchQuote();

    intervalRef.current = setInterval(fetchQuote, quoteRefreshRate * 60 * 1000);

    return () => clearInterval(intervalRef.current);
  }, [quoteRefreshRate]);

  function handleIntervalChange() {
    setQuoteRefreshRate(currentQuoteInterval);
    toast.success("Definições atualizadas com sucesso!", {
      duration: 2500,
      description: `Refresh rate da citação atualizado para ${currentQuoteInterval} minutos`
    });
  }

  function handleIntervalCancel() {
    setCurrentQuoteInterval(quoteRefreshRate);
  }

  return (
    <div className="w-5/6 md:w-3/5">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div key={quote} className="relative bg-background">
          <motion.p
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            key={quote}
            className="bold border-l-4 border-accent  py-6 pl-6 text-center text-2xl font-bold italic md:text-4xl"
          >
            "{quote}"
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            key={author}
            className="mt-4 text-right text-xl text-muted md:text-2xl"
          >
            ~{author}
          </motion.p>
        </div>
      )}

      <Drawer
        onOpenChange={() =>
          currentQuoteInterval !== quoteRefreshRate &&
          setCurrentQuoteInterval(quoteRefreshRate)
        }
      >
        <DrawerTrigger className="fixed bottom-6 right-6">
          <SettingsIcon className="size-6 md:size-8" />
        </DrawerTrigger>
        <DrawerContent className="p-4 md:p-8">
          <DrawerHeader>
            <DrawerTitle>Definições do Fortune</DrawerTitle>
            <DrawerDescription>
              Altera a frequência de atualização da citação
            </DrawerDescription>
          </DrawerHeader>

          <div className="my-4 flex flex-wrap items-center justify-center gap-4">
            {AVAILABLE_REFRESH_INTERVALS.map((interval) => (
              <Button
                key={interval}
                onClick={() => setCurrentQuoteInterval(interval)}
                className="w-full max-w-40"
                variant={
                  currentQuoteInterval === interval ? "default" : "outline"
                }
              >
                {interval} min
              </Button>
            ))}
          </div>

          <DrawerFooter className="items-center justify-center gap-x-8 md:flex-row">
            <DrawerClose>
              <Button onClick={handleIntervalChange} className="w-40">
                Salvar
              </Button>
            </DrawerClose>
            <DrawerClose>
              <Button
                onClick={handleIntervalCancel}
                className="w-40"
                variant="outline"
              >
                Cancelar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Toaster />
    </div>
  );
};

export default FortuneQuote;
