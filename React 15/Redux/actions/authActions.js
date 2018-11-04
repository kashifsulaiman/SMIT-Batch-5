const updateUser = (user) => {

    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "UPDATE_USER",
                    user: json
                })
        })
    }
   
}

const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}

export {
    updateUser,
    removeUser
}