export const checkValidEmail = (email) => {
  const isValidEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  if (!isValidEmail) return "Please enter a valid email address";
  return null;
};

export const checkValidPassword = (password) => {
  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^*-]).{8,}$/.test(
      password
    );

  if (!isValidPassword)
    return "Your password must contain atleast 8 characters, one lowercase letter,one uppercase letter,one number and one special character.";
  return null;
};

export const checkValidName = (name) => {
  const isValidName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  if (!isValidName) return "Please enter full name";
  return null;
};
