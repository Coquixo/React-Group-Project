import { createSlice } from '@reduxjs/toolkit';//Método que me permite crear el slice


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: ''
    },
    reducers: {
        login: (state, action) => {
            return {
                ...action.payload
            }
        }
    }
});

export const { login } = userSlice.actions;//Este login que exportamos es el mismo login que contiene los reducers.
//Lo llamaremos en el componente container login

//userData contiene el estado del reducer, es decir, userData es lo que van a leer
// los componentes conectados a este reducer, para saber sus credenciales
export const userData = (state) => state.user;

export default userSlice.reducer;