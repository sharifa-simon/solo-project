

const teamReducer = (state = [], action) => {
    if (action.type === "SET_TEAMS") {
        return state, action.payload;
    } return state;
}

export default teamReducer;