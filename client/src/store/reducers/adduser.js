const initialState = {
    isInprogress: false,
    isError: false,
    message: '',
    status: null,
    userList: {},
}
export default function UserReducers(state = initialState, action) {
    switch (action.type) {


        case 'USER_SUCCESS':
            return {
                ...state,
                isInprogress: true,
                isError: false,
                message: action.messsage,
            }
        case 'USER_FAILURE':
            return {
                ...state,
                isInprogress: false,
                isError: true,
                message: action.messsage,
            }
        case 'USERUPDATE_SUCCESS':
            return {
                ...state,
                isInprogress: true,
                isError: false,
                message: action.messsage,
            }
        case 'USERUPDATE_FAILURE':
            return {
                ...state,
                isInprogress: false,
                isError: true,
                message: action.messsage,
            }

        default:
            return state
    }
}
