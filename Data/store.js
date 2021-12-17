// store.js
import React, {createContext, useReducer} from 'react';

// const initialState = {};
// const initialState = {
//     selectedValue: 20,
//     chatPoints : [ 
//         { value: 10, label: 'General' },
//         { value: 20, label: "Let's discuss your product idea" },
//         { value: 20, label: 'Improve your product' },
//         { value: 20, label: 'Data and business analysis'}
//     ]
//   };

const ACTIONS = {
    UPDATE_SELECTED: 'update_selected'
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.UPDATE_SELECTED:
        //   const newTheme = state.theme === 'light' ? 'dark' : 'light'
        //   console.log(action.payload)
        //   let newState = {...state, selectedValue: action.payload};
        //     console.log(newState)
          return {...state, selectedValue: action.payload}
        case 'ADD_IDEA':
          return {...state, ideas: [...state.ideas, action.idea]}
        case 'REMOVE_IDEA':
          const filteredIdeas = state.ideas.filter(idea => idea.id !== action.id);
          return {...state, ideas: filteredIdeas}
        default:
          return state
      }
}
// const store = createContext(initialState);
// const { Provider } = store;

// const StateProvider = ( { children } ) => {
//   const [state, dispatch] = useReducer((state, action) => {
//     switch(action.type) {
//       case 'action description':
//         const newState = 1// do something with the action
//         return newState;
//       default:
//         throw new Error();
//     };
//   }, initialState);

//   return <Provider value={{ state, dispatch }}>{children}</Provider>;
// };

export { reducer, ACTIONS }
