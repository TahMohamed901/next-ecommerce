import { axiosApi } from "../api/axios";
import { ProductCategoryDto } from "../types/productTypes";

export const createCategory = async (body: ProductCategoryDto): Promise<ProductCategoryDto> => {
    const response = await axiosApi.post("/categories/create", body, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};

export const updateCategory = async (
    categoryId: number,
    body: ProductCategoryDto
): Promise<ProductCategoryDto> => {
    const response = await axiosApi.put(`/categories/update/${categoryId}`, body, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};

export const getAllCategories = async (): Promise<ProductCategoryDto[]> => {
    const response = await axiosApi.get("/categories/find/all");
    return response.data;
};

export const getCategoryById = async (categoryId: number): Promise<ProductCategoryDto> => {
    const response = await axiosApi.get(`/categories/find/id/${categoryId}`);
    return response.data;
};

export const getCategoryByName = async (categoryName: string): Promise<ProductCategoryDto> => {
    const response = await axiosApi.get(`/categories/find/name/${encodeURIComponent(categoryName)}`);
    return response.data;
};


export const deleteCategory = async (categoryId: number): Promise<string> => {
    const response = await axiosApi.delete(`/categories/delete/${categoryId}`);
    return response.data;
};
