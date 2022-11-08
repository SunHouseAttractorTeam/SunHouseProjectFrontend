import React from 'react';
import VkLogin from 'react-vk-login'
import {useDispatch} from "react-redux";
import {vkLoginRequest} from "../../../containers/store/actions/usersActions";
import {vkAppId} from "../../../config";
import vkicon from '../../../assets/icons/vkicon.svg';

const VkontakteLogin = () => {
    const dispatch = useDispatch();

    const responseVk = response => dispatch(vkLoginRequest(response));

    return (
        <VkLogin
            client_id={vkAppId}
            fields="name,email,picture"
            callback={({ provider, data }) => {
                responseVk(data);
            }}
            onReject={(err) => {
                console.log(err)
            }}
        >
            <img alt="vkicon" src={vkicon}/>
        </VkLogin>
    );
};

export default VkontakteLogin;