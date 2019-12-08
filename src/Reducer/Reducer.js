import emplyeeList from '../Data/EmployeeList.json';
import userData from '../Data/config.json';
import * as actionTypes from '../Actions/ActionTypes'


const initialState = {
    employeeList: null,
    redirect: false,
    error: null,
    isAuth: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HANDLE_LOGIN: {
            if (action.email === userData.username && action.password === userData.password) {
                return {
                    ...state,
                    redirect: true,
                    error: null,
                    isAuth: true
                }
            } else {
                return {
                    ...state,
                    redirect: false,
                    error: "Invalid credentials",
                    isAuth: false
                }
            }
        }
        case actionTypes.GET_EMPLOYEE_LIST: return {
            ...state,
            employeeList: emplyeeList
        }
        default: return state;
    }
}

export default appReducer;