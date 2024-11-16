import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  Box,
  Grid2 as Grid,
} from "@mui/material";
import StockModal from "../prefabs/stockModal";
import { Paper, Table, TableBody, MenuItem } from "@mui/material";
import { useState } from "react";
import StockCard from "../prefabs/stockCard";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
function StockList() {
  const products = [
    {
      productID: 1,
      name: "Smartphone",
      desc: "A sleek and modern device designed for seamless communication and entertainment. Features a high-resolution touchscreen, a powerful processor for smooth multitasking, long battery life, and advanced camera systems for capturing stunning photos and videos. Perfect for staying connected on the go.",
      "warehouse.name": "Main Warehouse",
      "warehouse.address": "123 Industrial Park, Chicago, IL",
      stock: 500,
      "supplier.name": "Tech Distributors Inc.",
      "supplier.address": "123 Tech Lane, Silicon Valley, CA",
      stockIN: [12, 334, 1, 0, 32, 199, 120, 394, 12, 444],
      stockOut: [2, 12, 1, 0, 400, 99, 20, 34, 2, 4],
    },
    {
      productID: 2,
      name: "Laptop",
      desc: "A portable and versatile computer built for productivity and entertainment. Equipped with a vivid display, a responsive keyboard, and ample storage. It offers fast processing speeds, long battery life, and multiple connectivity options, making it ideal for work, study, and entertainment.",
      "warehouse.name": "West Coast Distribution Center",
      "warehouse.address": "456 Pacific Blvd, San Francisco, CA",
      stock: 200,
      "supplier.name": "Gadget World Ltd.",
      "supplier.address": "456 Gadget Road, New York, NY",
      stockIN: [12, 200, 100, 30, 32, 199, 120, 394, 12, 444],
      stockOut: [11, 12, 10, 10, 2, 99, 20, 34, 2, 4],
    },
    {
      productID: 3,
      name: "T-Shirt",
      desc: "A comfortable and casual piece of clothing made from breathable fabric. Designed with a classic round or V-neck, it’s lightweight and perfect for everyday wear. Available in various colors and sizes, suitable for all seasons and styles.",
      "warehouse.name": "East Coast Hub",
      "warehouse.address": "789 Atlantic Ave, New York, NY",
      stock: 1000,
      "supplier.name": "Fashion House",
      "supplier.address": "789 Fashion Ave, Los Angeles, CA",
      stockIN: [12, 334, 1, 0, 32, 199, 120, 394, 12, 444],
      stockOut: [9, 12, 1, 0, 400, 99, 20, 34, 2, 4],
    },
    {
      productID: 4,
      name: "Office Chair",
      "warehouse.name": "Main Warehouse",
      desc: "An ergonomic and adjustable chair designed for maximum comfort during long working hours. Features lumbar support, padded armrests, and a swivel base for easy mobility. Built with durable materials to enhance posture and reduce fatigue.",
      "warehouse.address": "123 Industrial Park, Chicago, IL",
      stock: 150,
      "supplier.name": "Office Supplies Co.",
      "supplier.address": "101 Office St, Houston, TX",
      stockIN: [122, 334, 100, 90, 59, 199, 120, 394, 12, 444],
      stockOut: [80, 130, 50, 30, 40, 99, 20, 34, 2, 4],
    },
    {
      productID: 5,
      name: "Milk",
      "warehouse.name": "Midwest Storage Facility",
      desc: "A nutritious and creamy liquid rich in calcium and protein. It’s perfect for drinking on its own, adding to coffee or tea, or using in cooking and baking. Available in whole, low-fat, or skim varieties to suit dietary needs.",
      "warehouse.address": "101 Cornfield Dr, Kansas City, MO",
      stock: 50,
      "supplier.name": "Daily Groceries Ltd.",
      "supplier.address": "555 Market St, Miami, FL",
      stockIN: [12, 334, 1, 0, 99, 199, 120, 394, 12, 444],
      stockOut: [10, 12, 1, 0, 400, 99, 20, 34, 2, 4],
    },
    {
      productID: 6,
      name: "Notebook",
      desc: "A compact and practical tool for jotting down notes, ideas, or sketches. Features lined or blank pages bound in a sturdy cover. Lightweight and portable, it’s an essential companion for students, professionals, and creatives alike.",
      "warehouse.name": "South Region Warehouse",
      "warehouse.address": "555 Southern Way, Dallas, TX",
      stock: 300,
      "supplier.name": "Books & Stationery Corp.",
      "supplier.address": "987 Book St, Boston, MA",
      stockIN: [120, 40, 100, 200, 200, 129, 120, 394, 12, 44],
      stockOut: [100, 20, 50, 150, 100, 99, 20, 34, 2, 40],
    },
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
  const triggerModel = () => {};

  return (
    <>
      <Stack style={{ marginBottom: "20px" }} direction="row" spacing={2}>
        <Item style={{ width: "100%" }}>
          <FormControl sx={{ width: "100%" }} size="small">
            <InputLabel id="Category_filter_label">Category</InputLabel>
            <Select
              labelId="Category_filter_label"
              id="Category_select"
              value={supplier}
              onChange={handleChangeSupplier}
              autoWidthlabel="Category"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>Category 1</MenuItem>
              <MenuItem value={21}>Category 2</MenuItem>
              <MenuItem value={22}>Category 3</MenuItem>
            </Select>
          </FormControl>
        </Item>
        <Item style={{ width: "100%" }}>
          <FormControl sx={{ width: "100%" }} size="small">
            <InputLabel id="supplier_filter_label">Supplier</InputLabel>
            <Select
              labelId="supplier_filter_label"
              id="supplier_select"
              value={supplier}
              onChange={handleChangeSupplier}
              autoWidthlabel="Supplier"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>Supplier 1</MenuItem>
              <MenuItem value={21}>Supplier 2</MenuItem>
              <MenuItem value={22}>Supplier 3</MenuItem>
            </Select>
          </FormControl>
        </Item>
      </Stack>
      <Box sx={{
        flexGrow: 1,
        overflow: 'auto',
      
      }} >
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid size={3}>
              <StockCard modalTrigger={triggerModel} data={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default StockList;
