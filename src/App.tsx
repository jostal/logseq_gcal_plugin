import './App.css'
import Calendar from "./components/calendar/Calendar";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { UserContext } from "./store/User";
import data from '../api_config.json'
import {useContext} from "react";
import GoogleSignIn from "./components/signIn/GoogleSignIn";

const App: React.FC<{ env: string }> = ({ env }) => {
    const [user] = useContext(UserContext)

    return (
        <div className="w-screen h-screen flex items-center justify-center text-white">
            <GoogleOAuthProvider clientId={data.client_id}>
                <div className="calendar-popup">
                    {// @ts-ignore
                        !user.signedIn ? (
                        <GoogleSignIn />
                    ) : (
                        <Calendar />
                    )}
                </div>
            </GoogleOAuthProvider>
          <button onClick={() => logseq.hideMainUI()}></button>
        </div>
   )
}

export default App
