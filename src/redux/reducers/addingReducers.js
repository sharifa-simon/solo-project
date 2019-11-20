

const teamReducer = (state = [], action) => {
    if (action.type === "SET_TEAM") {
        return action.payload;
    } return state
}

export default teamReducer;