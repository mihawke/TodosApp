import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        name: { first: '', last: '' },
        email: '',
        password: '',
        role: ''
    },
    reducers: {
        addUser: (state, action) => {

        },
        removeUser: (state, action) => {

        },
        updateUserRole: (state, action) => {

        }
    }
})

export const { addUser, removeUser, updateUserRole } = userSlice.actions;

export default userSlice;