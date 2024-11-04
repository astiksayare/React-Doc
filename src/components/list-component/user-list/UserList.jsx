

const UserList = () => {

    const userList = [
        {
            id: 1,
            name: 'Astik',
            age : 24,

        },

        {
            id: 2,
            name: 'Shreeju',
            age : 22,

        },

        {
            id: 3,
            name: 'Tanu',
            age : 20,

        },

    ]

    return (
        <>
        {
            userList.map(item => (
                <div key={item.id}>
                    <h1>Name: {item.name}</h1>
                    <h1>Age: {item.age}</h1>
                </div>
            ))
        }
        </>
    )
}

export default UserList;