import React, { useState, useEffect } from "react";
import { Field, Formik, ErrorMessage } from "formik";
import { Link, withRouter, useHistory, useLocation } from "react-router-dom";
import { addUser, userUpdate } from '../store/      /adduser';
import * as Yup from "yup";
import { connect } from 'react-redux';

const Adduser = (props) => {

    const history = useHistory();
    const [role, setrole] = useState('');

    const [Updatefirstname, setUpdatefirstname] = useState();
    const [Updatelastname, setUpdatelastname] = useState("");
    const [Updateemail, setUpdateemail] = useState("");
    const [UpdatedId, setUpdatedId] = useState("");

    const senddata = (fields) => {
        //console.log(role);
        const data = {
            "first_name": fields.first_name,
            "last_name": fields.last_name,
            "email": fields.email,
            "role": role
        }
        props.addUser(data, history);
    };
    const updateData = (fields) => {
        const dataupdate = {
            "first_name": fields.Updatefirstname,
            "last_name": fields.Updatelastname,
            "email": fields.Updateemail,
            "role": role,
        }
        props.userUpdate(UpdatedId, dataupdate, history);
    };
    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            const data = location.state;
            console.log(data);
            setUpdatefirstname(data.first_name);
            setUpdatelastname(data.last_name);
            setUpdateemail(data.email);
            setUpdatedId(data._id);
        }
    }, []);

    const [has, setHass] = useState(location.state);

    return (
        <React.Fragment>
            {
                has ?
                    <div
                        className="container login-fix"
                        style={{ width: "500px", marginTop: "200px" }}
                    >
                        <Formik
                            initialValues={{
                                Updatefirstname: location.state ? has.first_name : "",
                                Updatelastname: location.state ? has.last_name : "",
                                Updateemail: location.state ? has.email : "",
                            }}
                            validationSchema={Yup.object().shape({
                                Updatefirstname: Yup.string().required("First name is required"),
                                Updatelastname: Yup.string().required("Last name is required"),
                                Updateemail: Yup.string()
                                    .required("email is required")
                                    .email("Invalid email"),
                            })}
                            onSubmit={(fields) => {
                                updateData(fields);
                                alert("user updated successfuly");
                            }}
                            render={({
                                values,
                                touched,
                                errors,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            }) => (
                                <div className="mycard">
                                    <br />
                                    <form method="post" onSubmit={handleSubmit}>
                                        <div className="card auth-card imput-field">
                                            <br />
                                            <h3
                                                style={{
                                                    fontWeight: "bolder",
                                                    color: "gray",
                                                    marginLeft: "100px",
                                                }}
                                                className="container"
                                            >
                                                User Information
                                          </h3>
                                            <br />
                                            <Field
                                                name="Updatefirstname"
                                                type="text"
                                                value={values.Updatefirstname}
                                                onChange={handleChange}
                                                placeholder="first name"
                                                className={
                                                    "form-control" +
                                                    (errors.Updatefirstname && touched.Updatefirstname
                                                        ? " is-invalid"
                                                        : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="first_name"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                            <br />
                                            <Field
                                                name="Updatelastname"
                                                type="text"
                                                value={values.Updatelastname}
                                                onChange={handleChange}
                                                placeholder="Last name"
                                                className={
                                                    "form-control" +
                                                    (errors.Updatelastname && touched.Updatelastname
                                                        ? " is-invalid"
                                                        : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="Updatelastname"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                            <br />
                                            <Field
                                                name="Updateemail"
                                                type="text"
                                                value={values.Updateemail}
                                                onChange={handleChange}
                                                placeholder="email"
                                                className={
                                                    "form-control" +
                                                    (errors.Updateemail && touched.Updateemail ? " is-invalid" : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="Updateemail"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                            <br />
                                            <div>
                                                <select
                                                    className='custom-select'
                                                    style={{
                                                        width: "150px",
                                                        marginLeft: "150px",
                                                        height: "35px",
                                                        background: "#f7f7f7",
                                                        outline: "0",
                                                    }}
                                                    onChange={(e) => setrole(e.target.value)}
                                                >
                                                    <option disabled>----Select role----</option>
                                                    <option value="Aritist">Aritist</option>
                                                    <option value="Designer">Designer</option>
                                                    <option value="ArtManager">ArtManager</option>
                                                </select>
                                            </div>
                                            <br />
                                            <button
                                                className=" text-white btn btn-dark"
                                                type="submit"
                                                name="action"
                                                style={{ width: "400px", marginLeft: "30px" }}
                                            >
                                                Edit User
                                        </button>
                                            <br />
                                            <br />
                                            <br />
                                            <Link to="/">
                                                <button
                                                    style={{
                                                        background: "white",
                                                        position: "absolute",
                                                        borderColor: "white",
                                                        marginLeft: "400px",
                                                        marginTop: "-40px",
                                                        outline: "0",
                                                    }}
                                                >
                                                    Back
                                        </button>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            )}
                        />
                    </div>
                    :
                    <div
                        className="container login-fix"
                        style={{ width: "500px", marginTop: "200px" }}
                    >
                        <Formik
                            initialValues={{
                                first_name: "",
                                last_name: "",
                                email: "",
                            }}
                            validationSchema={Yup.object().shape({
                                first_name: Yup.string().required("First name is required"),
                                last_name: Yup.string().required("Last name is required"),
                                email: Yup.string()
                                    .required("email is required")
                                    .email("Invalid email"),
                            })}
                            onSubmit={(fields) => {
                                senddata(fields);
                                alert("user register successfuly");
                            }}
                            render={({
                                values,
                                touched,
                                errors,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            }) => (
                                <div className="mycard">
                                    <br />
                                    <form method="post" onSubmit={handleSubmit}>
                                        <div className="card auth-card imput-field">
                                            <br />
                                            <h3
                                                style={{
                                                    fontWeight: "bolder",
                                                    color: "gray",
                                                    marginLeft: "100px",
                                                }}
                                                className="container"
                                            >
                                                User Information
                                             </h3>
                                            <br />
                                            <Field
                                                name="first_name"
                                                type="text"
                                                value={values.first_name}
                                                onChange={handleChange}
                                                placeholder="first name"
                                                className={
                                                    "form-control" +
                                                    (errors.first_name && touched.first_name
                                                        ? " is-invalid"
                                                        : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="first_name"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                            <br />
                                            <Field
                                                name="last_name"
                                                type="text"
                                                value={values.last_name}
                                                onChange={handleChange}
                                                placeholder="Last name"
                                                className={
                                                    "form-control" +
                                                    (errors.last_name && touched.last_name
                                                        ? " is-invalid"
                                                        : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="last_name"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                            <br />
                                            <Field
                                                name="email"
                                                type="text"
                                                value={values.email}
                                                onChange={handleChange}
                                                placeholder="email"
                                                className={
                                                    "form-control" +
                                                    (errors.email && touched.email ? " is-invalid" : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                            <br />
                                            <div>
                                                <select
                                                    style={{
                                                        width: "150px",
                                                        marginLeft: "150px",
                                                        height: "35px",
                                                        background: "#f7f7f7",
                                                        outline: "0",
                                                    }}
                                                    onChange={(e) => setrole(e.target.value)}
                                                >
                                                    <option disabled>----Select role----</option>
                                                    <option value="Aritist">Aritist</option>
                                                    <option value="Designer">Designer</option>
                                                    <option value="ArtManager">ArtManager</option>
                                                </select>
                                            </div>
                                            <br />
                                            <button
                                                className="text-white btn btn-dark"
                                                type="submit"
                                                name="action"
                                                style={{ width: "400px", marginLeft: "30px" }}
                                            >
                                                Add user
                                        </button>
                                            <br />
                                            <br />
                                            <br />
                                            <Link to="/">
                                                <button
                                                    style={{
                                                        background: "white",
                                                        position: "absolute",
                                                        borderColor: "white",
                                                        marginLeft: "400px",
                                                        marginTop: "-40px",
                                                        outline: "0",
                                                    }}
                                                >
                                                    Back
                    </button>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            )}
                        />
                    </div>
            }
        </React.Fragment>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        addUser: (data, history) => dispatch(addUser(data, history)),
        userUpdate: (id, data, history) => dispatch(userUpdate(id, data, history)),
    };
}
export default withRouter(connect(null, mapDispatchToProps)(Adduser));

