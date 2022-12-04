import axios from "axios";
import { movieApi } from "./movieApi";

const dataBase = "http://localhost:3001";

export const loginUser = async (user) => {
  //el user se lo he metido cuando he implementado la funcion en la otra funcion logMe
  let res = await axios.post(dataBase + "/auth/login", user); // Pasariamos un body, que en este caso es user.
  return res;
};

export const registerUser = async (user) => {
  let res = await axios.post(dataBase + "/auth/register", user);
  return res;
};

//Ultimas añadidas(HAY QUE CAMBIAR LOS ENDPOINTS POR LOS DE NUESTRA BASEDEDATOS)
export const bringMovies = async () => {
  let res = await axios.get(dataBase + "/movies");
  console.log(res);

  return res.data;
};

export const searchMovies = async (criteria) => {
  let res = await axios.get(dataBase + "/movies/title/" + criteria);
  console.log("AQUIELRES", res.data);
  return res.data;
};

export const bringUsers = async (jwt) => {
  let res = await axios.get(dataBase + "/users  /", {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  return res.data;
};

export const eraseUser = async (notMail, jwt) => {
  let res = await axios.delete(dataBase + "/users/deleteUser/" + notMail, {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  return res.data;
};

export const rentMovie = async (body, jwt) => {
  let res = await axios.post(dataBase + "/orders/newOrderMovie", body, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  console.log("Estoy dentro de rentMovie", res);
  console.log(res.data);
  return res;
};
