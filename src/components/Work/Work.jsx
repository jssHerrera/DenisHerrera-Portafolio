import { useState } from "react";
import Title from "../Title/Title";
import FilterWork from "./FilterWork";
import "./Work.css";
import CardWork from "./CardWork";
import data from "./data";

const Work = () => {
  const [cards, setCarts] = useState(data);
  const [active, setActive] = useState("All");

  const handleClick = (item) => {
    setActive(item)

    if (item === "All") {
      setCarts(data);
      return;
    }
    const filtro = data.filter((elem) =>{
      return elem.tecnologi === item
    });



    setCarts(filtro);
  };

  return (
    <section className="proyectos container app__flex">
      <Title first="Mis" second="Proyectos" />
      <FilterWork handleClick={handleClick} active={active} />
      <article className="proyecto__box ">
        <div className="proyecto__container">
          {cards.map((project) => (
            <CardWork key={project.id} project={project} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Work;
