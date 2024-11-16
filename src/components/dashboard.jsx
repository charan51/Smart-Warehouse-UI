import React, { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Header from "./Header.js";
import ListView from "./ListView.js";
import DetailedView from "./DetailedView.js";
import NavigationBar from "./NavigationBar";
import lowstockJSON from "../Assets/data/lowstock.json";
import { getLowStockAction } from "../redux/actions/dashboard.js";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@mui/material/Grid2";
import { Padding, Visibility } from "@mui/icons-material";
const Dashboard = () => {
  const [lowstocks, setLowstocks] = useState([]);
  const [product, setProduct] = useState(); // Initialize with the first product

  const productSelected = (product) => {
    setProduct(product);
  };
  const disptach = useDispatch();

  const lowStockState = useSelector((state) => state.dashboard);
  useEffect(() => {
    disptach(getLowStockAction());
  }, []);

  useEffect(() => {
    if (!lowStockState.loading && lowStockState.lowstock.data?.length > 0) {
      setLowstocks(lowStockState.lowstock.data);
      setProduct(lowStockState.lowstock?.data[0]);
    }
  }, [lowStockState]);

  return (
      <Grid container spacing={0}>
        {/* Left section (25%) */}
        <Grid size={3}>
          <Box
            sx={{
              display: "flex",
              height: "98vh",
              bgcolor: "background.dark",
              overflow: "auto",
            }}
          >
            <ListView
              products={lowstocks}
              onProductSelect={productSelected}
            ></ListView>
          </Box>
        </Grid>
        {/* Right section (75%) */}
        <Grid size={9} style={{background:"white", marginBottom:"5px", marginTop: "5px"}} >
            <DetailedView selectedProduct={product} ></DetailedView>
        </Grid>
      </Grid>
  );
};

export default Dashboard;
