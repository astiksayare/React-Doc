import * as Api from '../../api/index';

export const ApiList = () => {
    const data = Api.useFetch('https://jsonplaceholder.typicode.com/users');

    console.log('ApiList component rendered...')
    return (
        <section>
            <h1>User List</h1>
            {
                data?.map(list => (
                    <ul key={list.id}>
                        <li>Username: {list.username}</li>
                        <li>Name: {list.name}</li>
                        <li>Email: {list.email}</li>
                        <li>City: {list?.address?.city}</li>
                        <hr width='500'/>
                    </ul>
                ))
            }
        </section>
    )
}