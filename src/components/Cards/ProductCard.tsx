
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { IconButton } from "@mui/material";
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingIcon from '@mui/icons-material/ShoppingBagSharp';
import Avatar from '@mui/material/Avatar';
import useCartStore from '@/hooks/useCartStore';
import { allProducts } from '@/lib/products';
const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(0.5),
    //   textAlign: 'center',
    // color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    cursor: "pointer",
    // ...theme.applyStyles('dark', {
    //     backgroundColor: '#1A2027',
    // }),
}))

const ProductCard: React.FC<{ pId: string }> = ({ pId }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart} = useCartStore();
    const product = allProducts.data.find(p => p.id === pId) ?? null;
    return (


        <>
        <img
        srcSet={`${product?.images[0]}?w=162&auto=format&dpr=2 2x`}
        src={`${product?.images[0]}?w=162&auto=format`}
        alt={product?.name}
        loading="lazy"
        style={{
            // borderBottomLeftRadius: 4,
            // borderBottomRightRadius: 4,
            display: 'block',
            width: '100%',
        }}
        />
        <Label>
            <div className='flex max-sm:w-full justify-between items-center border-b'>
                <div className='flex gap-1'>
                    <Avatar sx={{ width: 28, height: 28 }} alt="User Avatar" src="/avatars/avt1.jpeg" />
                    <h1 className='text-md font-light pt-1 max-sm:hidden'>User</h1>
                </div>
                <div>
                    <IconButton onClick={() => setIsFavorite(!isFavorite)} color="error">
                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton color='inherit' onClick={() => product?.id && addToCart(product.id,1)}>
                        <ShoppingIcon />
                    </IconButton>
                </div>
            </div>
    
            <div className='flex-col justify-start pt-2'>
                <h1 className='font-semibold text-md'>{product?.name}</h1>
                <p className='font-light text-sm'>{product?.description}</p>
                <h1 className='font-medium text-end pt-2'>${product?.price}</h1>
            </div>
        </Label>
        </>
    )
        
    
};

export default ProductCard;
