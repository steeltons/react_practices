import { Box, Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import structures from '../../data'
import { Link } from 'react-router-dom';

const imgData = structures.slice(0, -1);

function Gallery() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ height: 585, overflowY: 'scroll', m: '20px auto' }}>
                <ImageList 
                    variant="masonry" gap={ 8 }
                    sx={{
                        columnCount: {
                            xs: '1 !important',
                            sm: '2 !important',
                            md: '3 !important',
                            lg: '4 !important'
                        }
                    }}
                >
                    {imgData.map((item, index) => (
                        <ImageListItem key={ item.img }>
                            <Link to={ `/buildings/${index}` }>
                                <img
                                    srcSet= {item.img}
                                    src= { item.img }
                                    alt= { item.title }
                                    loading= 'lazy' 
                                />
                                <ImageListItemBar position='bottom' title={ item.title } />
                            </Link>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    )
}

export default Gallery;