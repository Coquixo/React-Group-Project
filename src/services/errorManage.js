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

        case "phone":

            //Tiene un bug
            if (! /[\d()+-]/g.test(value)) {
                return "Escriba un formato de teléfono correcto";
            }

            break;

        case "password":

        //   falta añadir que se puedan meter numeros, y que sea obligatorio añdadir una en mayusculas
            if (!/[a-z]/gi.test(value) || value.length<8) {
                return "Introduce a valid password, 8 characters minimun"
            }



            break;

        default:
            console.log("FATAL ERROR WE ARE GOING TO DIE!");

            break;

    }






}