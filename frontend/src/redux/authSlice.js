import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        authUser:null,
        loading:false,
    },
    reducers:{
        setLoading:(state, action) => {
            state.loading = action.payload;
        },
        setUser:(state,action) => {
            state.authUser = action.payload
        }
    }
});

export const {setLoading, setUser} = authSlice.actions;
export default authSlice.reducer;