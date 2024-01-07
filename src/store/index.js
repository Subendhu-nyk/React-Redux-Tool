// react redux
// import {createStore} from 'redux';

// const intialState={counter:0,showCounter:false};

// // const reducer=(state,action)=>{}
// const counterReducer=(state=intialState,action)=>{
// if (action.type==='increment'){
//     return{
//         counter:state.counter+1,
//         showCounter:state.showCounter
//     }
// }
// if(action.type==='decrement'){
//     return{
//         counter:state.counter-1,
//         showCounter:state.showCounter
//     }
// }
// if (action.type==='incrementby5'){
//     return{
//         counter:state.counter+action.amount,
//         showCounter:state.showCounter
//     }
// }
// if(action.type==='decrementby5'){
//     return{
//         counter:state.counter-action.amount,
//         showCounter:state.showCounter
//     }
// }

// if (action.type==='toggle'){
//     return{
//         showCounter:!state.showCounter,
//         counter:state.counter
//     }
// }



// return state;
// }

// const store= createStore(counterReducer);

// export default store;


// react redux toolkit

import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState={counter:0,showCounter:true};

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter=state.counter+action.payload
        },
        decrease(state,action){
            state.counter=state.counter-action.payload
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter
        }
    }
});



const store=configureStore({
    reducer:counterSlice.reducer
});
export const counterAction=counterSlice.actions;
export default store;
