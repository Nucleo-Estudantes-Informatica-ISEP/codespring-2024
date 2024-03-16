import { useEffect, useState } from "react";

const FortuneQuotes: React.FC = () => {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = () => {
      fetch(
        "https://api.quotable.io/random?tags=technology|motivational|success|philosophy|wisdom|humurous&maxLength=80"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch quote");
          }

          return response.json();
        })
        .then((data) => {
          setQuote(data.content);
          setAuthor(data.author);
          setError(null);
        })
        .catch((error) => {
          console.error("Error fetching quote:", error);
          setError(error.message);
        });
    };

    fetchQuote();

    const interval = setInterval(fetchQuote, 30 * 60 * 1000); // Fetch new quote every 30 minutes

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p className="text-center text-xl italic">"{quote}"</p>
          <p className="text-center text-xl">{author}</p>
        </div>
      )}
    </div>
  );
};

export default FortuneQuotes;
