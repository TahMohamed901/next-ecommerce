import ProductCard from "./ProductCard";

interface ProductsListProps {
    categoryId: string;
    limit?: number;
    searchParams?: any;
}

const ProductsList = async (
    // {
    // categoryId,
    // limit,
    // searchParams,
    // }: ProductsListProps
) => {

    return (
        <div className="flex w-full ">
            <div className="w-full grid max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 max-2xl:grid-cols-5 2xl:grid-cols-5">
                <ProductCard img="/products/photography/nktt-4.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 1" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 2" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 3" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 4" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 5" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 6" price={120} />
                <ProductCard img="/products/photography/nktt-4.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 1" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 2" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 3" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 4" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 5" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 6" price={120} />
                <ProductCard img="/products/photography/nktt-4.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 1" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 2" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 3" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 4" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 5" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 6" price={120} />
                <ProductCard img="/products/photography/nktt-4.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 1" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 2" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 3" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 4" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 5" price={120} />
                <ProductCard img="/products/photography/nktt-3.jpg" title="Nouakchott" username="Mdmoud" description="nouakchott sunset 6" price={120} />
            </div>
        </div>
)
}

export default ProductsList

