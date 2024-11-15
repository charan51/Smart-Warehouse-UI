import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import StockModal from '../prefabs/stockModal';
import { Paper, Table, TableBody, MenuItem } from "@mui/material";
import { useState } from "react";
import StockCard from "../prefabs/stockCard";
import Grid from "@mui/material/Grid2";

function StockList() {
  const products = [
    { productID: 1, name: "Product 1", stock: 10 },
    { productID: 2, name: "Product 2", stock: 15 },
    { productID: 3, name: "Product 3", stock: 5 },
    { productID: 4, name: "Product 4", stock: 20 },
    { productID: 5, name: "Product 5", stock: 8 },
    // Add more products as needed
  ];
  const [productCategory, setProductCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(
    products[0]?.productID
  );

  const handleChangeCategory = (event) => {
    setProductCategory(event.target.value);
  };

  const handleChangeSupplier = (event) => {
    setSupplier(event.target.value);
  };
  
  const onProductSelected = (product) => {
    setSelectedProduct(product.productID);
  };
  const triggerModel = () => {

  }

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <FormControl sx={{ width: "100%" }} size="small">
          <InputLabel id="supplier_filter_label">Supplier</InputLabel>
          <Select
            labelId="supplier_filter_label"
            id="supplier_select"
            value={supplier}
            onChange={handleChangeSupplier}
            autoWidthlabel="Supplier"
            sx={{ backgroundColor: "white", color: "black" }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={20}>Supplier 1</MenuItem>
            <MenuItem value={21}>Supplier 2</MenuItem>
            <MenuItem value={22}>Supplier 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={6}>
        <FormControl sx={{ width: "100%" }} size="small">
          <InputLabel id="supplier_filter_label">Supplier</InputLabel>
          <Select
            labelId="supplier_filter_label"
            id="supplier_select"
            value={supplier}
            onChange={handleChangeSupplier}
            autoWidthlabel="Supplier"
            sx={{ backgroundColor: "white", color: "black" }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={20}>Supplier 1</MenuItem>
            <MenuItem value={21}>Supplier 2</MenuItem>
            <MenuItem value={22}>Supplier 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {products.map((product, index) => (
        <Grid size={2}>
          <StockCard modalTrigger={triggerModel} data={{}} />
        </Grid>
      ))}
      <Grid>
        <StockModal data={{}} handelOpen={triggerModel} />
      </Grid>
    </Grid>
  );
}

export default StockList;
