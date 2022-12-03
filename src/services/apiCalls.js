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
  console.log(res)
  let res = await axios.get(
    dataBase + "/movies"
  );
    console.log(res.data)

  return res.data;
};

export const searchMovies = async (criteria) => {
  let res = await axios.get(
    dataBase + "/movies/title/"+criteria
  );
    console.log("AQUIELRES",res.data)
  return res.data;
};

// export const bringSeries = async () => {
//   let res = await movieApi.get(
//     "/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=4"
//   );

//   return res.data.results;
// };

// export const searchSeries = async (criteria) => {
//   let res = await axios.get(
//     `/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${criteria}&page=4&include_adult=false`
//   );

//   return res.data.results;
// };

export const bringUsers = async (jwt) => {
  let res = await axios.get(dataBase + "/users/", {
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

// export const loginUser = async (user) => {
//     try {
//         let res = await axios.post(dataBase + "auth/login", {
//             mail: user.mail,
//             password: user.password
//         });
//         console.log(res);
//     } catch (error) {
//         console.error(error);
//         return;
//     }
// };

// export const registerUser = async (user) => {
//     try {
//         let res = await axios.post(dataBase + "auth/register", {
//             name: user.name,
//             surname: user.surname,
//             age: user.age,
//             phone: user.phone,
//             address: user.address,
//             mail: user.mail,
//             password: user.password
//         });
//         console.log(res);
//     } catch (error) {
//         console.error(error);
//         return;
//     }
// };
