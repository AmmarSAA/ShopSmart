export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                token: action.token
            }

        case "LOGOUT_USER": 
            return {
                ...state,
                token: undefined
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