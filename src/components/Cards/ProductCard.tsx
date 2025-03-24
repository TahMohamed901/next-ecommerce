
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { IconButton } from "@mui/material";
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
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

const ProductCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
    <Label>
        {/* Favorite Icon */}
        <div className='flex max-sm:w-full justify-between items-center border-b'>
            {/* <Image 
            className='cursor-pointer'
            src={isFavorite ? "/icons/r-fv.svg" : "/icons/favoriteicon.svg"} 
            alt="favorite icon" 
            width={20} 
            height={20}
            onClick={() => setIsFavorite(prev => !prev)}
            /> */}
            <div className='flex gap-1'>
            <Avatar sx={{ width: 28, height: 28 }} alt="Travis Howard" src="/avatars/avt1.jpeg" />
            <h1 className='text-md font-light pt-1 max-sm:hidden'>username</h1>
            </div>
            <IconButton onClick={() => setIsFavorite(!isFavorite)} color="error">
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
        </div>

        {/* Product Details */}
        <div className='flex-col justify-start pt-2'>

            <h1 className='font-semibold text-md'>product name</h1>
            <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, officia eum.</p>
            <h1 className='font-medium text-end pt-2'>$132</h1>
            
        </div>
    </Label>
    )
}

export default ProductCard