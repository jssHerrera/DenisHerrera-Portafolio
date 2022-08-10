import Title from "../Title/Title";
import SocialContac from "./SocialContac";
import ContactForm from "./ContactForm";
import "./Contac.css";

const Contac = () => {
  return (
    <section id="contact" className="contact">
      <Title first='Contacta' second='Conmigo!'/>
      <div className="container contact__container">
        <ContactForm/>
        <SocialContac/>
      </div>
    </section>
  );
};

export default Contac;
