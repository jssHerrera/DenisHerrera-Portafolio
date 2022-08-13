import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useForm from "../../hook/useForm";

const ContactForm = () => {

  const {
    form,
    sentEmail,
    nameError,
    emailError,
    textAreaError,
    handleChange,
    handelSubmit,
  } = useForm();

  const { nombre, email, mensage } = form;

  return (
    <form ref={sentEmail} className="contact__form" onSubmit={handelSubmit}>
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          autoComplete="off"
          required
          className={`contact__form-item ${nameError ?'error' :''}`}
          value={nombre}
          onChange={handleChange}
        />
       {nameError ?(<span className="contact__form-span">{nameError} </span>): ''}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          required
          className={`contact__form-item ${emailError ?'error' :''}`}
          value={email}
          onChange={handleChange}
        />
        {emailError ?(<span className="contact__form-span">{emailError} </span>): ''}
      </div>
      <div>
        <textarea
          name="mensage"
          rows="7"
          placeholder="Mensage"
          required
          value={mensage}
          className={`contact__form-item ${textAreaError ?'error' :''}`}
          onChange={handleChange}
        ></textarea>
        {textAreaError ?(<span className="contact__form-span">{textAreaError} </span>): ''}
      </div>
      <input
        type="submit"
        className="contact_from-btn btn--filled"
        value="Enviar"
        onSubmit={handelSubmit}
      />
  <ToastContainer/>
    </form>
  );
};

export default ContactForm;
