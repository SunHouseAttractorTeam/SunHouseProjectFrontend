import React from 'react';
import VkLogin from 'react-vkontakte-login';
import {useDispatch} from "react-redux";
import {vkLoginRequest} from "../../../store/actions/usersActions";
import {vkAppId} from "../../../config";
import vkicon from '../../../assets/icons/vkicon.svg';

const VkontakteLogin = () => {
    const dispatch = useDispatch();

    const responseVk = response => dispatch(vkLoginRequest(response));

    return (
        <VkLogin
            apiId={vkAppId}
            callback={responseVk}
            render={renderProps => (
                <img alt="vkicon" src={vkicon} onClick={renderProps.onClick}/>
            )}
        />
    );
};

export default VkontakteLogin;