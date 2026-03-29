
export interface UserDataProps {
    username: string;
    password: string;
    mobile: number | string;
}

export interface UserRegistrationProps extends UserDataProps {
    firstName: string;
    lastName: string;
    email: string;
    domain: string;
    gender: boolean;
    day: number;
    month: number;
    year: number;
}