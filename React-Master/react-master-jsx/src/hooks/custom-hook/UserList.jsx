import * as CustomHook from './index';

export const UserList = () => {

    const [data] = CustomHook.useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <section>
            {
                data?.map(user => (
                    <li key={user.id}>
                        Name: {user.name}
                    </li>
                ))
            }
        </section>
    )
}