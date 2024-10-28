import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Header from "./Header.js"
import ListView from './ListView.js';
import DetailedView from './DetailedView.js';
import NavigationBar from './NavigationBar';
import lowstockJSON from '../Assets/data/lowstock.json';
const Dashboard = () => {
    const [lowstocks, setLowstocks] = useState(lowstockJSON);
    // const products = [
    //     { id: 1, name: 'Product 1', stock: 10 },
    //     { id: 2, name: 'Product 2', stock: 15 },
    //     { id: 3, name: 'Product 3', stock: 5 },
    //     { id: 4, name: 'Product 4', stock: 20 },
    //     { id: 5, name: 'Product 5', stock: 8 },
    //     // Add more products as needed
    //   ];
    
     const [product, setProduct] = useState(lowstocks.data.products[0]); // Initialize with the first product 
      const productSelected = (product) => {
        setProduct(product);
      }
    return (
      <div>
        <Box sx={{ display: 'flex', height: '100%'}}>
            {/* Left section (25%) */}
          <Box sx={{ width: '25%', margin:'5px', bgcolor:'background.dark'}}>
            <Box sx={{display:'flex',height:'98vh',bgcolor:'background.dark',overflow:'auto'}}>
              <ListView products={lowstocks.data.products} onProductSelect = {productSelected} ></ListView>
            </Box>
          </Box>
          {/* Right section (75%) */}
          <Box sx={{ width: '75%', bgcolor: 'grey.200',margin:'5px'}}>
            <Box sx={{display:'flex',height:'100%',flexDirection: 'column',bgcolor:'background.dark'}}>
            <DetailedView selectedProduct={product}></DetailedView>
            </Box>
          </Box>
        </Box>
      </div>
    );
};

export default Dashboard;
