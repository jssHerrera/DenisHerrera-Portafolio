import Presentation from "./Presentation";
// import AvatarForMe from "./AvatarForMe";
import Title from "../Title/Title";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <Title first="Sobre" second='Mi'/>


      <div className="about__main container">
        {/* <AvatarForMe /> */}
        <Presentation />
      </div>
    </section>
  );
};

export default About;
