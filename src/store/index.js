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

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";




const store=configureStore({
    reducer:{counter:counterReducer, auth:authReducer}
});


export default store;
