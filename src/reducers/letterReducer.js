import {GET_LETTER} from "../actions/lettersActions";

const initialState = {
    choiceLetterssss: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LETTER:
            return Object.assign({}, state, {choiceLetters:["g", "q"]});
    
        default:
            break;
    }
}