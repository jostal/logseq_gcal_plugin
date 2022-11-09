import data from '../../../api_config.json';
import {useContext, useEffect} from "react";
import {UserContext} from "../../store/User";



export default function Calendar() {
    const [user] = useContext(UserContext)

    useEffect(() => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/sodomfmappu3vhjp8chvovb930@group.calendar.google.com/events')
        // @ts-ignore
        xhr.setRequestHeader('Authorization', 'Bearer ' + user.accessToken);
        xhr.send();
    }, [])

    return (
        <div>
        </div>
    )
}