import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//creating thunk
// thunk is used to make api calls in redux

export const fetchRest = createAsyncThunk('restList/fetchRest',()=>{
  const result =  axios.get('/restaurant.json').then(response=>response.data.restaurants)
  console.log("===rest data===");
  console.log(result);
  return result;

})

const restSlice = createSlice({
    name:"restList",
    initialState:{
        loading:false, //pending state
        allRest:[], //resolve state
        error:"",//rejected state
        searchRest:[]//to store search result
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRest.pending,(state)=>{
            state.loading =true;

        })
        builder.addCase(fetchRest.fulfilled,(state,action)=>{
            state.allRest = action.payload;
            state.loading = false;
            state.searchRest = action.payload
            state.error=""
        })
        builder.addCase(fetchRest.rejected,(state,action)=>{
            state.loading=false;
            state.allRest=[]
            state.error = action.error.message


        })
    },
    reducers:{
        search:(state,action)=>{
            console.log("==== inside search===");
            console.log(state);
            state.allRest = state.searchRest.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

export default restSlice.reducer
export const {search}=restSlice.actions