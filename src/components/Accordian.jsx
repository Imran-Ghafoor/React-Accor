import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import "../App.css";
import { FAQ } from "./UI/FAQ.JSX";

export const Accordian = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  //handleButton
  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <h1>The Accordian</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          const { id } = curElem;
          return (
            <FAQ
              key={id}
              curData={curElem}
              isActive={activeId === id}
              onToggle={() => handleToggle(id)}
            />
          );
        })}
      </ul>
    </>
  );
};
