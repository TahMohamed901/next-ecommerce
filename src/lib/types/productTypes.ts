
export interface ProductCategoryDto {
    id: number;
    name: string;
    description: string;
}
export interface ProductUpdateDTO {
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    status: string;
}
export interface ProductDTO {
    id: number;
    artisanId: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    status: string;
    mainImage: string;
}
export interface ProductImageDTO {
    id: number;
    productId: number;
    isMain: string;
    imageUrl: string;
}