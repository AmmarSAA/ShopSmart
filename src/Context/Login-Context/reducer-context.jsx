export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload
            }

        case "LOGOUT_USER":
            localStorage.removeItem('loggedInUser');
            return {
                ...state,
                user: undefined
            }
        case "SIGNUP_USER":
            return {
                ...state,
                user : undefined
            }

        default:
            return state;
    }

}