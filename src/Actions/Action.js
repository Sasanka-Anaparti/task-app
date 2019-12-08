import * as actionTypes from './ActionTypes';

export const handleLogin = (email, password) => ({
    type: actionTypes.HANDLE_LOGIN,
    email, password
});


export const getEmployeeList = () => ({
    type: actionTypes.GET_EMPLOYEE_LIST
});