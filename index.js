const redux=require('redux');
// console.log(redux)

//state 
const initialState = {
    num:0
}
//reducer
const rootReducer=(state=initialState, action)=>{
    if(action.type=='INCREMENT'){
        return{
            ...state,
            num:state.num+10
      }
    }
    if(action.type=='ADD'){
        return{
            ...state,
            num:state.num+action.value
        }
    }
    return state
}
//store
const store=redux.createStore(rootReducer);

//Before dispatch output |manaullay get the state update infromation
console.log(store.getState());
console.log(store)

//subscription

store.subscribe(()=>{
    console.log("[subscribe]",store.getState());
})
//dispatch action

store.dispatch({
    type:'INCREMENT'
})
store.dispatch({
    type:'ADD',
    value:34
})

//After dispatch output||manaullay get the state update infromation
// console.log(store.getState());