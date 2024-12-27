import { useData } from "./UserContext";



const Profile = () => {


    const {data} = useData();

    return (
        <>
            <h1>Login Page</h1>    
            {

                data.map((list) => (
                    <li key={Math.random() * 100}>
                    {list}
                    </li>
                ))
            }  
        </>
    )
}

export default Profile;