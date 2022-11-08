import {createSlice} from "@reduxjs/toolkit";

const name = 'users';

export const initialState = {
    user: null,
    registerLoading: false,
    registerError: null,
};

const usersSlice = createSlice({
    name,
    initialState,
    reducers: {
        registrationRequest(state) {
            state.registerLoading = true;
            state.registerError = null;
        },
        registrationSuccess(state, action) {
            state.registerLoading = false;
            state.user = action.payload;
        },
        registrationFailure(state, action) {
            state.registerLoading = false;
            state.registerError = action.payload;
        },
    }
});

export default usersSlice;















