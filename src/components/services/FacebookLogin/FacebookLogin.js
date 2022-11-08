import React from 'react';
import {useDispatch} from "react-redux";
import {facebookAppId} from "../../../config";
import {LoginSocialFacebook} from 'reactjs-social-login';
import {facebookLoginRequest} from "../../../containers/store/actions/usersActions";
import fbIcon from '../../../assets/icons/facebookicon.svg';

const FacebookLogin = () => {
    const dispatch = useDispatch();

    const facebookResponse = response => dispatch(facebookLoginRequest(response));

    return (
        <LoginSocialFacebook
            isOnlyGetToken
            appId={facebookAppId}
            onResolve={({ provider, data }) => {
                facebookResponse(data);
            }}
            onReject={(err) => {
                console.log(err)
            }}
        >

            <img alt="fb" src={fbIcon}/>
        </LoginSocialFacebook>
    );
};

export default FacebookLogin;