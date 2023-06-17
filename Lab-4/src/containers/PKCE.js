import React from 'react';
import PKCEState from '../components/pkce/PKCEState';
import PKCECodeVerifier from '../components/pkce/PKCECodeVerifier';
import PKCECodeChallenge from '../components/pkce/PKCECodeChallenge';
import AuthorizationCode from '../components/pkce/AuthorizationCode';
import AccessToken from '../components/pkce/AccessToken';
import Resource from '../components/pkce/Resource';

function PKCE() {
    return (
        <React.Fragment>
            <PKCEState></PKCEState>
            <PKCECodeVerifier></PKCECodeVerifier>
            <PKCECodeChallenge></PKCECodeChallenge>
            <AuthorizationCode></AuthorizationCode>
            <AccessToken></AccessToken>
            <Resource></Resource>
        </React.Fragment>
    );
}

export default PKCE;