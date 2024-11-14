import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// Sample JSON data
const productData = {
  Product: "Office Chair",
  Barcode: "1234567893",
  Category: "Furniture",
  Supplier: "Office Supplies Co.",
  Price: "149.99",
  Cost: "100.00",
  Description: "Ergonomic chair for office work"
};

const ProductView = () => {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', padding: 2, mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Product Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Name: 
            </Typography>
            <Typography variant="body1">{productData.Product}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Barcode: 
            </Typography>
            <Typography variant="body1">{productData.Barcode}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Category:
            </Typography>
            <Typography variant="body1">{productData.Category}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Supplier: 
            </Typography>
            <Typography variant="body1">{productData.Supplier}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Price:
            </Typography>
            <Typography variant="body1">${productData.Price}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Cost:
            </Typography>
            <Typography variant="body1">${productData.Cost}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="text.secondary">
              Description:
            </Typography>
            <Typography variant="body1">{productData.Description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductView;
