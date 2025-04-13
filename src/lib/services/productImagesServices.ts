import { axiosApi } from "../api/axios";
import { ProductImageDTO } from "../types/productTypes";

export const getAllProductImages = async (productId: number): Promise<ProductImageDTO[]> => {
    const response = await axiosApi.get(`/images/getAll?productId=${productId}`);
    return response.data;
};
export const uploadImage = async (data: {
    file: File;
    productId: number;
    isMain?: boolean;
}) => {
    const formData = new FormData();
    formData.append("image", data.file);
    formData.append("productId", data.productId.toString());
    formData.append("isMain", String(data.isMain ?? false));

    const response = await axiosApi.post("/images/add", formData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },
    });

    return response.data;
};

export const uploadMultipleImages = async (data: {
    files: File[];
    productId: number;
}) => {
    const formData = new FormData();
    data.files.forEach((file) => formData.append("images", file));
    formData.append("productId", data.productId.toString());

    const response = await axiosApi.post("/images/addmultiple", formData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },
    });

    return response.data;
};

export const deleteImage = async (imageId: number) => {
    const response = await axiosApi.delete("/images/delete", {
    params: { imageid: imageId },
    });

    return response.data;
};
