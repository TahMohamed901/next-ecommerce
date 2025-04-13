import { axiosApi } from "../api/axios";
import { UserDTO } from "../types/userTypes";

export const fetchCurrentUser = async (): Promise<UserDTO | null> => {
    try {
    const response = await axiosApi.get("/users/me");
    return response.data as UserDTO;
    } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    return null;
    }
};