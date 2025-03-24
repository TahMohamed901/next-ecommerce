const ProductDetails = () => {
    return (
        <>
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat eveniet corrupti voluptatibus consequatur explicabo unde praesentium, tenetur libero, earum vitae magni ducimus molestias blanditiis quam nostrum quisquam reiciendis. Cupiditate?</p>
        {/* Separator */} <div className='h-[2px] bg-gray-100' />
        <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
                $200
            </h3>
            <h2 className="font-medium text-2xl">
                $150
            </h2>
        </div>
        </>
    )
}

export default ProductDetails