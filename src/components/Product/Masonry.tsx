"use client"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';
import ProductCard from '../Cards/ProductCard';
import Link from 'next/link';
import { ProductDTO } from '@/lib/types/productTypes';
const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    //   textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const ImageMasonry: React.FC<{ products: ProductDTO[] }> = ({ products }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    
    const columns = isLg ? 5 : isMd ? 4 : 2;
return (
    <Box  
    sx={{width: "100%"}}
    >
        <Masonry columns={columns} spacing={0}  className='w-full '>
            {products.map((product,index)=>(
              <div key={index} className='px-1 py-2' >
                {/* <Link href={`/${pId}`}> */}
                  <ProductCard product={product}/>
                {/* </Link> */}
              </div>
            ))}
        </Masonry>
    </Box>
);
}
export default ImageMasonry;