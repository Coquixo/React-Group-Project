import axios from 'axios';

export const loginUser = async (user) => {//el user se lo he metido cuando he implementado la funcion en la otra funcion logMe
    let res = await axios.post("endpoint del alumno", user)// Pasariamos un body, que en este caso es user.
    return res;
};

export const registerUser = async (user) => {
    let res = await axios.post("ednpoint del alumno", user)
    return res;
};