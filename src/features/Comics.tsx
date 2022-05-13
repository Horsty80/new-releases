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
        <>
          <h2>{comics.length} new Comics</h2>
          <ul>
            {comics.map(({ title, type, date, price, img }, index) => (
              <li key={`${index}-${title}-${date}`}>
                <img src={img} alt="" />
                <span>
                  {date} - {title} ({type}) : {price}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
}
