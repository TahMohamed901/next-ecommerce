
const ProductDetails = ({details}) => {
    return (
        <>
        <h1 className="text-4xl font-medium">{details.name}</h1>
        <p className="text-gray-500">{details.description}</p>
        {/* Separator */} <div className='h-[2px] bg-gray-100' />
        <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
                {details.price - 20}
            </h3>
            <h2 className="font-medium text-2xl">
                {details.price}
            </h2>
        </div>
        {/* Separator */} <div className='h-[2px] bg-gray-300' />
        </>
    )
}

export default ProductDetails