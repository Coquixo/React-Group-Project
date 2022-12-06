export const errorCheck = (value, type) => {
  switch (type) {
    case "text":
      if (!/[a-z]/gi.test(value)) {
        return "*No valid format, please use characters";
      } else {
        return "";
      }

    case "email":
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        return "Email incorrect format";
      } else {
        return "";
      }

    case "age":
      if (!/[0-9]/gi.test(value)) {
        return "*Please, add your age.";
      }

    case "phone":
      if (!/(?=.*?[0-9])/.test(value)) {
        return "Incorrect format, only numbers.";
      } else {
        return "";
      }

    case "password":
      if (value.length < 8) {
        return "Write at least 8 characters";
      } else {
        //Checking the password format....

        if (!/[\d()+-]/g.test(value)) {
          return "*Write at least one number, one lowercase letter, and one uppercase letter.";
        } else {
          return "";
        }
      }
    case "password2":
      return "*Passwords do not match";

    case "credentials":
      return "Wrong email or password";
    case "address":
      if (
        !/[a-zA-Z0-9]/gi.test(
          value
        ) /*&& /["!@#$%^&*()+=-\\\';,./{}|\":<>?]/gi.test(value)*/
      ) {
        return "*Do not use special characters, please.";
      } else {
        return "";
      }

    default:
      console.log("Some errors have not been taken into account");

      break;
  }
};
