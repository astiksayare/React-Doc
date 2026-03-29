
import { useContextData } from "../UserContext";

const Profile = () => {

    const appState = useContextData();

    if (appState.data === undefined) return <h1>Please Login.</h1>

    return <h1>Welcome {appState.data}</h1>
}

export default Profile;