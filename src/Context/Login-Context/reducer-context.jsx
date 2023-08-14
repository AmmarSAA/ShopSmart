export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                token: action.token,
                user: action.user,
            };

        case "LOGOUT_USER":
            return {
                token: null,
                user: null,
            };

        default:
            return state;
    }
};
