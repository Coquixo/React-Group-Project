import axios from "axios";

const dataBase = "https://master.d35259stzijjoa.amplifyapp.com";

export const loginUser = async (user) => {
  let res = await axios.post(dataBase + "/auth/login", user);
  return res;
};

export const registerUser = async (user) => {
  let res = await axios.post(dataBase + "/auth/register", user);
  return res;
};

export const bringMovies = async () => {
  let res = await axios.get(dataBase + "/movies");

  return res.data;
};

export const searchMovies = async (criteria) => {
  let res = await axios.get(dataBase + "/movies/title/" + criteria);

  return res.data;
};

export const bringUsers = async (jwt) => {
  let res = await axios.get(dataBase + "/users/", {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  return res.data;
};

export const bringUserOrder = async (jwt) => {
  let res = await axios.get(dataBase + "/orders/appOrders", {
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
  return res;
};

export const bringOrders = async (user, jwt) => {
  let res = await axios.get(dataBase + "/orders/orders/" + user, {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  return res.data.resp;
};
