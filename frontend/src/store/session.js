import { createSlice } from '@reduxjs/toolkit'; // @reduxjs is scope and toolkit is the package.
import axios from 'axios'; // this is to communicate like sending http request to Node server

// this is so that it starts with the no user logged in.
const initialState = { user: null };


const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, removeUser } = sessionSlice.actions;

export const login = (email, password) => async (dispatch) => {
    const response = await axios.post('/api/users/login', { email, password });
    dispatch(setUser(response.data));
};

export const signUp = (username, email, password) => async(dispatch) => {
    const response = await axios.post('/api/users/register', { username, email, password });
    dispatch(setUser(response.data));
}


const sessionReducer = sessionSlice.reducer;

//We are exporting reducer only because that is what we need.
export default sessionReducer;
