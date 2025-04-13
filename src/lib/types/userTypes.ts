export interface UserRegisterDTO {
    name: string;
    email: string;
    password: string,
    // confirmePassword: string,
    phone: string;
    role: string;
    gender: string;
}

export interface UserLoginDTO {
    email: string;
    password: string,
}

export interface UserDTO {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    gender: string;
    image: string;
}