import {GoogleOAuthProvider, useGoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import data from "../../../api_config.json"
import {useContext} from "react";
import {UserContext} from "../../store/User";

export default function GoogleSignIn () {
    const [user, setUser] = useContext(UserContext);

    const handleLogin = useGoogleLogin({
        // @ts-ignore
        onSuccess: tokenResponse => setUser({ signedIn: true, accessToken: tokenResponse.access_token })
    })

    return (
        <div>
            <button onClick={() => handleLogin()}>
                Sign in
            </button>
        </div>
    )
}