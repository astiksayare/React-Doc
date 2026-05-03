
export interface LoginForm {
    username: string;
    password: string;
    confirmPassword: string;
    isAdmin?: boolean;
}

export interface RegistrationForm extends LoginForm {
    firstName: string;
    lastName: string;
    email: string;
    mobile: number;
    address: string;
}