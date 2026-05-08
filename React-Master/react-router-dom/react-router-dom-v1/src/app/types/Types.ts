
export interface User {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    mobile: number | string;
    email: string;
    address?: string;
}