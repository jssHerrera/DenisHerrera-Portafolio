import Title from "../Title/Title";
import "./HardSkill.css";
import dataHardSkill from "./dataHardSkill";
import HardSkillCard from "./HardSkillCard";

const HardSkills = () => {
  return (
    <section className="hard__kill container app__flex">
      <Title first="Mis" second="Skills" />
      <div className="hard__kill-container ">
        {dataHardSkill.map(elem => (
          <HardSkillCard key={elem.id} elem={elem}/>
        ))}
      </div>
    </section>
  );
};

export default HardSkills;
