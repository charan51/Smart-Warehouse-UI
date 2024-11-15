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
    console.log(lowStockState.lowstock.data);
    if(lowStockState.lowstock?.data?.legth > 0)
      setLowstocks(lowStockState.lowstock.data);
    // setProduct(lowStockState.lowstock.data[0]);
  }, [lowStockState]);

  useEffect(() => {
      // console.log(lowstocks);
    // setProduct(lowStockState.lowstock.data[0]);
  }, [lowstocks]);

  return (
    // <div>
    //   <Box sx={{ display: "flex", height: "100%" }}>
    //     {/* Left section (25%) */}
    //     <Box sx={{ width: "25%", margin: "5px", bgcolor: "background.dark" }}>
    //       <Box
    //         sx={{
    //           display: "flex",
    //           height: "98vh",
    //           bgcolor: "background.dark",
    //           overflow: "auto",
    //         }}
    //       >
    //         <ListView
    //           products={lowstocks}
    //           onProductSelect={productSelected}
    //         ></ListView>
    //       </Box>
    //     </Box>
    //     {/* Right section (75%) */}
    //     <Box sx={{ width: "75%", bgcolor: "grey.200", margin: "5px" }}>
    //       <Box
    //         sx={{
    //           display: "flex",
    //           height: "100%",
    //           flexDirection: "column",
    //           bgcolor: "background.dark",
    //         }}
    //       >
    //         <DetailedView selectedProduct={product}></DetailedView>
    //       </Box>
    //     </Box>
    //   </Box>
    // </div>
    <>
    </>
  );
};

export default Dashboard;
