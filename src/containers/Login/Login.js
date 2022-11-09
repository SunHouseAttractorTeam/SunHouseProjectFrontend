import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import {loginUserRequest} from "../../store/actions/usersActions";

const Login = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        await dispatch(loginUserRequest({...user}));
    };

    return (
        <>
            <form onSubmit={submitFormHandler}>
                <FormInput
                    required={true}
                    label="Email"
                    name="email"
                    value={user.email}
                    onChange={inputChangeHandler}
                />

                <FormInput
                    type="password"
                    required={true}
                    label="Password"
                    name="password"
                    value={user.password}
                    onChange={inputChangeHandler}
                />
                <button>
                    Sign In
                </button>
            </form>
       </>
    );
};

export default Login;