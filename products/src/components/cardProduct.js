import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

const cardProduct = (props) => {
    const { image, title, price } = props;

  return (
    <Card sx={{ maxWidth: 300, p: 2, bgcolor: "white", }}>
        <CardMedia
            sx={{ height: 250 }}
            image={image}
            title={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {title.length > 25 ? title.substring(0, 20) : title}
            </Typography>
            <Typography variant="h6" color="blue" sx={{ fontWeight: "bold" }}>
            {parseFloat(price*10000).toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 })}
            </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="medium" sx={{ ":hover": { bgcolor: "blue", color: "white" }, gap: 1 }}>
                Add to cart <AddShoppingCart />
            </Button>
        </CardActions>
    </Card>
  )
}

export default cardProduct