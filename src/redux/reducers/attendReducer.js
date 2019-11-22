const attendReducer = (state = [], action) => {
    if (action.type === "SET_ATTEND") {
        return action.payload;
    } return state
}

export default attendReducer;