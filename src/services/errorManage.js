export const errorCheck = (value, type) => {

    switch (type) {


        case "text":

            if (! /[a-z]/gi.test(value)) {
                return "No valid format, please use characters";
            }

            break;

        case "email":

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                return "Email incorrect format";
            }

            break;

        case "age":
            if (!/[0-9]/gi.test(value)){
                return "Please, add your age."
            }

        case "phone":

            //Tiene un bug
            if (! /[\d()+-]/g.test(value)) {
                return "Incorrect format, numbers only.";
            }

            break;

        case "password":

            //   falta añadir que se puedan meter numeros, y que sea obligatorio añdadir una en mayusculas
            if (!/[a-zA-Z0-9]/gi.test(value) || value.length < 8) {
                return "Introduce a valid password, not special characters, 8 minimun"
            }

            break;

        case "adress":

            if (!/[a-zA-Z0-9]/gi.test(value)) {
                return "Do not use special characters, please."
            }

        default:
            console.log("FATAL ERROR WE ARE GOING TO DIE!");

            break;

    }






}