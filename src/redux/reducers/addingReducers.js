

const teamReducer = (state = [], action) => {
    if (action.type === "SET_TEAMS") {
        return action.payload;
    } return state
}

export default teamReducer;