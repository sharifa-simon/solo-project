const rosterReducer = (state = [], action) => {
    if (action.type === "SET_ROSTER") {
        return state, action.payload;
    } return state
}

export default rosterReducer;