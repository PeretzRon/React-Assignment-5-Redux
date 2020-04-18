import * as actionType from '../actions';

const initialState = {
    persons: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === actionType.ADD_NEW_PERSON) {
        const newPerson = {
            id: Math.random(),
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }
        return {
            persons: state.persons.concat(newPerson),
        }
    }

    if (action.type === actionType.DELETE_PERSON) {
        return {
            persons: state.persons.filter(person=> person.id !== action.id),
        }
    }

    return state;
};

export default reducer;