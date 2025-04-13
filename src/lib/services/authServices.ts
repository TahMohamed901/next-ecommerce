import { axiosApi } from "../api/axios";
import { UserDTO, UserLoginDTO, UserRegisterDTO } from "../types/userTypes";

export const login = async (body:UserLoginDTO) : Promise<UserDTO> => {
    try {
        const response = await axiosApi.post("/auth/login",body)  
        return response.data;
    } catch (error: any) {
        // console.error("Erreur lors de la récupération des utilisateurs", error);
        throw new Error(error?.response?.data?.message || "Login failed");
    }
};

export const emailVerify = async (params: { email: string; code: string }) => {
    try {
    const response = await axiosApi.post("/auth/verify", null, {
        params: {
        email: params.email,
        code: params.code,
        },
    });
    return response;
    } catch (error) {
    throw error;
    }
};


export const register = async (body:UserRegisterDTO) => {
    
    try {
        const response = await axiosApi.post("/auth/register",body)
        return response;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axiosApi.post("/auth/logout")
    } catch (error) {
        throw error;
    }
};