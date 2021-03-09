import axios from "axios";

export function userGet() {
    console.log("data pass")
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_NODE_API}/userall`)
            .then((response) => {
                console.log("{{{}}}", response.data.data);
                dispatch({
                    type: "USER_GET_SUCCESS",
                    message: "user get list success",
                    data: response.data,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: "USER_GET_FAILURE",
                    message: "Something went wrong",
                    error
                });
            });
    };
}
export function userDelete(id, history) {
    return (dispatch) => {
        return axios
            .delete(`${process.env.REACT_APP_NODE_API}/userdelete/${id}`)
            .then(() => {
                dispatch({
                    type: "USERDELETE_SUCCESS",
                    message: "user delete success",
                    history
                    // data:response.data
                });
            })
            .catch(function (error) {
                dispatch({
                    type: "USERDELETE_FAILURE",
                    message: "Something went wrong",
                    error
                });
            });
    };
}

export function searchGet(search) {
    return (dispatch) => {
        //console.log("dfdfdd",search)
        return axios
            .get(`${process.env.REACT_APP_NODE_API}/search/${search}`)
            .then((response) => {
                dispatch({
                    type: "SEARCH_SUCCESS",
                    message: "search data success",
                    data: response.data,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: "SEARCH_FAILURE",
                    message: "something went wrong",
                    error
                });
            });
    };
}

export function Allsearchuser(searchname) {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_NODE_API}/searchdata/${searchname}`)
            .then((response) => {
                dispatch({
                    type: "USER_GET_SUCCESS",
                    message: "user get list success",
                    data: response.data,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: "USER_GET_FAILURE",
                    message: "Something went wrong",
                    error
                });
            });
    };
}

export function searchroleGet(rolesearch) {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_NODE_API}/searchrole/${rolesearch}`)
            .then((response) => {
                dispatch({
                    type: "SEARCHROLE_SUCCESS",
                    message: "search data success",
                    data: response.data,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: "SEARCHROLE_FAILURE",
                    message: "something went wrong",
                    error
                });
            });
    };
}
export function Allsearchrole(searchrole) {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_NODE_API}/searchroledata/${searchrole}`)
            .then((response) => {
                dispatch({
                    type: "USER_GET_SUCCESS",
                    message: "user get list success",
                    data: response.data,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: "USER_GET_FAILURE",
                    message: "Something went wrong",
                    error
                });
            });
    };
}



