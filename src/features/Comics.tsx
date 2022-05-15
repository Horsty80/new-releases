import { useEffect, useState } from "react";
import { FetchedComic } from "../models/fetchedDatas";

export default function Comics() {
  const [comics, setComics] = useState<FetchedComic[]>();

  useEffect(() => {
    const fetchComics = async () => {
      const response = await fetch(import.meta.env.VITE_COMICS_DATA);
      const data: FetchedComic[] = await response.json();
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
            {comics.map(
              (
                {
                  title,
                  coverImg,
                  availabilityHumanDate,
                  price,
                  productType,
                  codeEan,
                  description,
                },
                index
              ) => (
                <li key={`${index}-${codeEan}`}>
                  <img src={coverImg} alt="" />
                  <span>
                    {availabilityHumanDate} - {title} ({productType}) : {price}
                  </span>
                  <span>{description}</span>
                </li>
              )
            )}
          </ul>
        </>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
}
