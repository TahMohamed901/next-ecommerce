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

interface IMProps{
    // w:number;
    // minH:number;
    // col:number;
    // sp:number;
    data:[{}]
}
interface Product {
    name: string;
    description: string;
    images: string[];
}
interface Category {
    path: string;
    data: Product[];
}
const ImageMasonry: React.FC<{ category: Category }> = ({ category }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    
    const columns = isLg ? 5 : isMd ? 4 : 2;
return (
    <Box  
    sx={{
        width: "100%",
        // minHeight: 829,
        // backgroundColor: "red",
        px: 0, // Ajoute un padding horizontal pour éviter le collage à gauch
        
    }}
    >
        <Masonry columns={columns} spacing={0}  className='w-full '>
            {category.data.map((product, index)=>(
            <div key={index} className='px-1 py-2' >
                <img
                srcSet={`${category.path+product.images[0]}?w=162&auto=format&dpr=2 2x`}
                src={`${category.path+product.images[0]}?w=162&auto=format`}
                alt={product.name}
                loading="lazy"
                style={{
                    // borderBottomLeftRadius: 4,
                    // borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                }}
                />
                <ProductCard />
            </div>
            ))}
        </Masonry>
    </Box>
);
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export default ImageMasonry;