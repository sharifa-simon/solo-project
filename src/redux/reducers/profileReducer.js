const profileReducer = (state = [], action) => {
    if (action.type === "SET_PROFILE") {
        return state, action.payload;
    } return state;
}

export default profileReducer;