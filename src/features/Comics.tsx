import { useEffect, useState } from "react";

export default function Comics() {
  const [comics, setComics] = useState<[]>();

  useEffect(() => {
    const fetchComics = async () => {
      const response = await fetch(import.meta.env.VITE_COMICS_DATA);
      const data = await response.json();
      setComics(data);
    };
    fetchComics();
  }, []);

  return (
    <div>
      {comics && comics.length > 0 ? (
        <ul>
          {comics.map(({ title, type, date, price }, index) => (
            <li key={`${index}-${title}-${date}`}>
              {date} - {title} ({type}) : {price}
            </li>
          ))}
        </ul>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
}
