import axios from 'axios';

const dataBase = "http://localhost:3000/";

export const loginUser = async (user) => {//el user se lo he metido cuando he implementado la funcion en la otra funcion logMe
    let res = await axios.post("endpoint del alumno", user)// Pasariamos un body, que en este caso es user.
    return res;
};

export const registerUser = async (user) => {
    let res = await axios.post("ednpoint del alumno", user)
    return res;
};


//Ultimas añadidas(HAY QUE CAMBIAR LOS ENDPOINTS POR LOS DE NUESTRA BASEDEDATOS)
export const bringMovies = async () => {

    let res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

    return res.data.results;
};

export const searchMovies = async (criteria) => {

    let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${criteria}&page=1&include_adult=false`);

    return res.data.results;
}

export const bringSeries = async () => {

    let res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=4");

    return res.data.results;
};

export const searchSeries = async (criteria) => {

    let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${criteria}&page=4&include_adult=false`);

    return res.data.results;
}





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