// =====================================
// VALIDAR CAMPO DE NOMBRE
// =====================================
// ^[a-zA-Z\s.,]+$
export function minMaxLength(text, minLength) {
  const resultado =
    /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/.test(text) &&
    text.length >= minLength &&
    text.trim();

  return resultado;
}
// =====================================
// VALIDAR CAMPO DE GMAIL
// =====================================
export function validEmail(text) {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  return regex.test(text);
}

// =====================================
// VALIDAR TEXT AREA
// =====================================
//
export function validText(text, minLength) {
  const textArea =
    /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/.test(text) &&
    text.length >= minLength &&
    text.trim();

  return textArea;
}


// =====================================
// VALIDAR EN CASO DE QUE EL USUARIO EXISTA
// =====================================
let registeredUsers = ["ravi@kiran.com", "mail@myblog.in", "contact@lucky.com"];

export function userExists(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (registeredUsers.findIndex((u) => u === email) !== -1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}
// =====================================
