import React from "react";

const styles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const FriendsList = () => {

    const [friends, setFriends] = React.useState(['Astik', 'Nitin']);

    const addFriend = () => {
        setFriends([...friends, 'Dilip', 'Aman', 'Sangram']);
    }

    const updateFriend = () => {
        setFriends(friends.map(friend => ( friend === "Nitin"? 'Nithin' : friend)));
    }

    const removeFriend = () => {
        setFriends(friends.filter(friend => ( friend !== "Aman")));
    }


    return (
        <div style={styles}>
            {
                friends.map(friendsName => (
                    <div key={Math.random() * 100}>
                        <h1>{friendsName}</h1>
                    </div>
                ))
            }

            <div>
                <button style={{ marginTop: '1rem' }} onClick={addFriend}>Add Friend</button>
                <button style={{ marginTop: '1rem' }} onClick={updateFriend}>Update Friend</button>
                <button style={{ marginTop: '1rem' }} onClick={removeFriend}>Remove Friend</button>
            </div>
        </div>
    )
}

export default FriendsList;