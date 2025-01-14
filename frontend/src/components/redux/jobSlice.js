import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState:{
        loading: false,
        jobs:[],
    },

    reducers:{
        setLoading:(state, action) => {
            state.loading = action.payload;
            
        },
        setJobs:(state, action)=>{
            state.jobs = action.payload
        }

    }
})
export const {setLoading, setJobs} = jobSlice.actions;
export default jobSlice.reducer;