import axios from "axios";

export function addUser(data, history) {
    //console.log("datadtatddtatdta:",data);
    return (dispatch) => {
        console.log("adduser=>", history)
        return axios
            .post(`${process.env.REACT_APP_NODE_API}/adduser`, data, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                dispatch({
                    type: "USER_SUCCESS",
                    message: response.data.message,
                    status: response.data.status,
                });
                history.push("/");
            })
            .catch(function (error) {
                dispatch({
                    type: "USER_FAILURE",
                    message: "Something went wrong",
                    error
                });
            });
    };
}
export function userUpdate(id, data, history) {
    console.log("userUpdate=>>", id, data, history)
    return (dispatch) => {
        return axios
            .patch(`${process.env.REACT_APP_NODE_API}/updateuser/${id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                dispatch({
                    type: "USERUPDATE_SUCCESS",
                    message: response.data.message,
                    status: response.data.status,
                });
                history.push("/");
            })
            .catch(function (error) {
                dispatch({
                    type: "USERUPDATE_FAILURE",
                    message: "Something went wrong",
                    error
                });
            });
    };
}