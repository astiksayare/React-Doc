import * as Hook from './index';
import React from 'react';
import { type UserType } from '../type';

export const Main: React.FC = () => {

    const userData: { data: UserType[] | null } = Hook.CustomHook.useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <section>
            {
                userData.data?.map((user: UserType) => (
                    <div key={user.id}>
                        <h1>Name: {user.name}</h1>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                ))
            }
        </section>
    )
}