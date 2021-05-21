const numReducer = (state,action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.val
        case 'DECREMENT':
            return state - action.val
    }
}

export default numReducer;


// const numReducer = (state,action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//     }
// }