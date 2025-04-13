import { axiosApi } from "../api/axios";
import { ProductDTO, ProductUpdateDTO } from "@/lib/types/productTypes";

export const getProductById = async (id: number): Promise<ProductDTO> => {
    const response = await axiosApi.get(`/products/id/${id}`);
    return response.data;
};

export const getAllProducts = async (page = 0, size = 10) => {
    const response = await axiosApi.get(`/products/all?page=${page}&size=${size}`);
    const products:ProductDTO[] = response.data.content;
    return response.data;
};

export const getAllProductsByCategoryId = async (categotyId:number ,page = 0, size = 10): Promise<ProductDTO[]> => {
    const response = await axiosApi.get(`/products/category/${categotyId}?page=${page}&size=${size}`);
    const products:ProductDTO[] = response.data.content;
    return products;
};
export const getAllProductsByCategoryName = async (categoryName:string ,page = 0, size = 10): Promise<ProductDTO[]> => {
    const response = await axiosApi.get(`/products/category/name/${categoryName}?page=${page}&size=${size}`);
    const products:ProductDTO[] = response.data.content;
    return products;
};

export const createProduct = async (body: ProductDTO): Promise<ProductDTO> => {
    const response = await axiosApi.post("/products/create", body);
    return response.data;
};

export const updateProduct = async (
    productId: number,
    body: ProductUpdateDTO
    ): Promise<ProductDTO> => {
    const response = await axiosApi.put(`/products/${productId}`, body);
    return response.data;
};

export const deleteProduct = async (productId: number) => {
    await axiosApi.delete(`/products/${productId}`);
};
