import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload],
        allCharacters: [...state.myFavorites, actions.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== Number(actions.payload)
        ),
      };
    case FILTER:
      const filtrado = state.allCharacters.filter(
        (character) => character.gender === actions.payload
      );
      return {
        ...state,
        myFavorites: filtrado,
      };

    case ORDER:
      let copy = state.allCharacters.sort((a, b) => {
        if (actions.payload === "A") {
          return a.id - b.id;
        } else if (actions.payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: copy,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;