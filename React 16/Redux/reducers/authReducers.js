const initial_state = {
    user: null
}

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case "UPDATE_USER": {
            return {...state, user: action.user}
        }
        case "REMOVE_USER": {
            return {...state, user: null}
        }
        default: {
            return state;
        }
    }
}

export default reducer