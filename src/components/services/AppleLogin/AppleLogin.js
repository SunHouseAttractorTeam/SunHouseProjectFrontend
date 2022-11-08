import React from 'react';
import {useDispatch} from "react-redux";
import {appleLoginRequest} from "../../../containers/store/actions/usersActions";
import {LoginSocialApple} from "reactjs-social-login";
import {appleAppId} from "../../../config";
import appleIcon from "../../../assets/icons/appleicon.svg";

const AppleLogin = () => {
    const dispatch = useDispatch();

    const appleResponse = response => dispatch(appleLoginRequest(response));

    return (
        <LoginSocialApple
            client_id={appleAppId}
            scope={'name email'}
            onResolve={({ provider, data }) => {
                appleResponse(data);
            }}
            onReject={(err) => {
                console.log(err)
            }}
        >
            <img alt="apple" src={appleIcon}/>
        </LoginSocialApple>
    );
};

export default AppleLogin;