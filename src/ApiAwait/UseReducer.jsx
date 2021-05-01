import React,{useReducer}from 'react';

const initialState = 0;

const reducer = (state,action) => {
    if(action.type === 'INCREMENT') {
        return state+1;
    }
    if(action.type==='DECREMENT') {
        return state -1;
    }
    return state;

}




const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return ( 
        <div>
            <h1>HI IM reducer</h1>
            <h2>{state}</h2>
            <button onClick= {()=> dispatch({type:'INCREMENT'})} >INCREMENT</button>
            <button onClick= {()=> dispatch({type:'DECREMENT'})} >DECREMENT</button>

        </div>
     );
}
 
export default UseReducer;
// DIPATCH IS USED TO TRIGGER THE ACTION 
