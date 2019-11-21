const rosterReducer = (state = [], action) => {
    if (action.type === "SET_ROSTER") {
        return action.payload;
    } return state
}

export default rosterReducer;