import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import React, { useEffect } from "react";
import { useState } from 'react';

function ListView({products,onProductSelect})
{
  const [selectedProduct, setSelectedProduct] = useState(products[0]?.productID);

  const onProductSelected = (product) =>
  {
    setSelectedProduct(product.productID);
    onProductSelect(product);
  }
  useEffect(() => {
    setSelectedProduct(products[0]?.productID);
  },[products])

  
  return(
    <TableContainer component={Paper} sx={{width:'100vh', overflow: 'auto',margin:'5px',marginBottom:'5px'}}>
      <Table stickyHeader aria-label="product table">
        <TableHead >
          <TableRow>
            <TableCell sx={{backgroundColor:'primary.main'}}>
             <Typography variant='h4' sx={{color:'text.default'}}> Product Name </Typography> 
            </TableCell>
            <TableCell align="right" sx={{backgroundColor:'primary.main'}} >
            <Typography variant='h4' sx={{color:'text.default'}}> Stock </Typography> 
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product,index) => (
            <TableRow key={index} hover
            selected={selectedProduct == product.productID}
            onClick={ () => onProductSelected(product)}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 

export default ListView