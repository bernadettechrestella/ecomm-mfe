import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Container from '@mui/material/Container'
import { Grid, IconButton, TextField, Typography } from '@mui/material'
import CardProduct from './components/cardProduct';
import { useProducts } from './hooks/useProducts';
import SearchIcon from '@mui/icons-material/Search';

const ProductPage = () => {
    const {products} = useProducts();
    const [searchText, setSearchText] = useState('');

    return (
        <Container maxWidth="xl" sx={{ mt: 10, mb: 4 }}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: '1rem' }}>
                <TextField label="Search" variant="outlined"
                    onChange={(e) => setSearchText(e.target.value)}
                    InputProps={{ 
                        endAdornment: (
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        )
                    }}/>
            </div>
            <Typography variant="h6" component="h1" gutterBottom>All Products </Typography>
            <Grid container spacing={3}>
                {products && products.length > 0 && products.map((product) => {
                    if (searchText === '') {
                        return (
                        <Grid item xs={3} key={product.id}>
                            <CardProduct
                            key={product.id}
                            image={product.images[0]}
                            title={product.title}
                            price={product.price}
                            />
                        </Grid>
                        );
                    } else if (
                        product &&
                        product.title &&
                        product.title.toLowerCase().includes(searchText.toLowerCase())
                    ) {
                        return (
                        <Grid item xs={3} key={product.id}>
                            <CardProduct
                            key={product.id}
                            image={product.images[0]}
                            title={product.title}
                            price={product.price}
                            />
                        </Grid>
                        );
                    }
                    return null;
                    })}
                </Grid>
        </Container>
    );
};

const mount = (el) => {
    createRoot(el).render(<ProductPage />);
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-products");
    if (el) {
        mount(el);
    }
}

export { mount };