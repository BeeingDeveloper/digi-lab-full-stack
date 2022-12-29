
export const actionType = {
    SET_UI_DATA: "SET_UI_DATA",
    SET_USER: "SET_USER",
    SET_ALL_EMAIL: "SET_ALL_EMAIL"
}


export const reducer=(state, action)=>{
    switch(action.type){
        case actionType.SET_UI_DATA:
            const newData = {...state, uiData: action.uiData};
            return newData;

        case actionType.SET_USER: 
            return {...state, user: action.user}

        case actionType.SET_ALL_EMAIL:
            const newEmail = {...state, emails: action.emails};
            return newEmail;
    }
}