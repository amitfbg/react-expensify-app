import {createStore} from 'redux';

//aCTION GENERATIOR FUNCTION THAT RETURN ACTION OBJECT

const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});

const setCount=({count}={})=>({
    type:"SET",
    count
});

const resetCount=()=>({
    type:"RESET"
});

const store= createStore((state ={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
        //const incrementBy=typeof action.incrementBy=='number'?action.incrementBy:1
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
        //const decrementBy=typeof action.decrementBy=='number'?action.decrementBy:1
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
    
    
});


//console.log(store.getState());

//Action - then an object that gets sent to the store
// action(increment,decrement and reset)
//I'd like to increment the count

//subscribe function on redux store which tracks all action
store.subscribe(()=>{
    console.log(store.getState());
});


//below are the actions
store.dispatch({
    type: 'INCREMENT',
    incrementBy:5
});

store.dispatch(incrementCount({incrementBy:5}));
// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount());

store.dispatch({
    type: 'DECREMENT',
    decrementBy:3
});
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:5}));

store.dispatch(resetCount());

store.dispatch(decrementCount());

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch({
    type: 'DECREMENT',
    decrementBy:10
});

store.dispatch(setCount({count:100}));

//need to send this action to the createStore


