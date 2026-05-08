import * as Api from '@/app/api';
import * as Router from 'react-router-dom';

export const UserList = () => {

    const params = Router.useParams();
    const data = Api.User.filter((item) => item.id === Number(params.userId));

    return (
        <section className='w-full flex flex-col justify-center items-center gap-4 bg-slate-950 h-full text-white'>
            {
                data && data.map((user) => (
                    <div key={user.id}>
                        <h1>Nick Name: {user.name}</h1>
                        <h1>First Name: {user.firstName}</h1>
                        <h1>Last Name: {user.lastName}</h1>
                        <h1>Email: {user.email}</h1>
                        <h1>Mobile: {user.mobile}</h1>
                    </div>
                ))
            }
        </section>
    )
}