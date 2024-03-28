import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_BASE_URL = "https://api.quotable.io/random";
const REFRESH_INTERVAL_MINUTES = 5;
const MAX_QUOTE_LENGTH = 80;

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

    fetchQuote();

    const interval = setInterval(
      fetchQuote,
      REFRESH_INTERVAL_MINUTES * 60 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-5/6 md:w-3/5">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div key={quote} className="relative">
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
            className="bold border-l-4 border-accent py-6 pl-6 text-center text-2xl font-bold italic md:text-4xl"
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
    </div>
  );
};

export default FortuneQuote;
