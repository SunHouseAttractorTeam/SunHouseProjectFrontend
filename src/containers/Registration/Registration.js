import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import {registrationRequest} from "../store/actions/usersActions";
import {historyPush} from "../store/actions/historyActions";

const Registration = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    };

    const submitFormHandler = e => {
        e.preventDefault();
        dispatch(registrationRequest(user));
        dispatch(historyPush('/'));
    };

    return (
        <>
            <form onSubmit={submitFormHandler}>
                <FormInput
                    required={true}
                    placeholder="Username"
                    name="username"
                    value={user.username}
                    onChange={inputChangeHandler}
                />
                <FormInput
                    required={true}
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={inputChangeHandler}
                />
                <FormInput
                    type="password"
                    required={true}
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={inputChangeHandler}
                />
                <button
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
        </>
    );
};

export default Registration;