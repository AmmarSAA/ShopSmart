export const reducer = (state, action) =>{
    switch(action.type) {
        case "LOGIN_USER":
        return {...state, user:true};

        default: {
            return state;
        }
    }
}