import { toast } from "react-toastify";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  minMaxLength,
  validEmail,
  validText,
} from "../helpers/formValid";

const useForm = () => {
  const init = {
    nombre: "",
    email: "",
    mensage: "",
  };

  const sentEmail = useRef();

  const notify = () => toast("😎 enviado");

  const [form, setForm] = useState(init);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textAreaError, setTexError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "nombre":
        setForm({ ...form, nombre: value });

        if (!minMaxLength(value, 3)) {
          setNameError("El nombre debe tener un mínimo de 3 caracteres");
          return;
        }
        setNameError("");
        break;

      case "email":
        setForm({ ...form, email: value });

        if (!validEmail(value, 3)) {
          setEmailError("Debe ser una dirección de correo electrónico válida.");
          return;
        }
        setEmailError("");

        break;
      case "mensage":
        setForm({ ...form, mensage: value });
        if (!validText(value, 5)) {
          setTexError(
            "Este campo no puede ir vacío ni contener solo espacios."
          );
          return;
        }
        setTexError("");
        break;
      default:
        break;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y535jio', 'template_i7bxu2n', sentEmail.current, 'aW0UP8VtPbF0FlkPr')
    notify();
    setForm(init);
  };

  return {
    form,
    sentEmail,
    nameError,
    emailError,
    textAreaError,
    handleChange,
    handelSubmit,
  };
};

export default useForm;
