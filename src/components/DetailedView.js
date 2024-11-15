import { Box, Card, Button, CardContent, Typography,Paper } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Grid from "@mui/material/Grid2";

function DetailedView({ selectedProduct }) {
  const [activeTab, setActiveTab] = useState(0);

  const onStockInButtonPressed = () => {
    setActiveTab(0);
  };
  const onStockOutButtonPressed = () => {
    setActiveTab(1);
  };

  const cardData = [
    {
      title: selectedProduct.stock,
      content: "Available",
      secondaryTitle: "Stock Count:",
    },
    {
      title: selectedProduct["warehouse.name"],
      content: selectedProduct["warehouse.address"],
      secondaryTitle: "Warehouse Details : ",
    },
    {
      title: selectedProduct["supplier.name"],
      content: selectedProduct["supplier.address"],
      secondaryTitle: "Supplier Details : ",
    },
  ];

  const stockIn = [...selectedProduct.stockIN];
  const stockOut = [...selectedProduct.stockOut];
  const xLabels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "June",
    "July",
    "Aug",
    "sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      {/* <Typography variant="h3" sx={{ color: "text.default" }}>
        {selectedProduct ? selectedProduct.name : ""}
      </Typography> */}
      <Box sx={{ height: "20vh", width: "100%", marginTop: "10px" }}>
        <Grid container spacing={4} sx={{ mb: 2 }}>
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card}>
              <Paper elevation={3} style={{ padding: "16px", backgroundColor: "#ffffff" }}>
                <Typography variant="h5">{card.secondaryTitle}</Typography>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2">{card.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ height: "100vh", width: "100%", bgcolor: "background.light" }}>
        {/* <Box sx={{ display: "flex", gap: 2, margin: "10px" }}>
          <Button
            variant={activeTab === 0 ? "contained" : "outlined"}
            onClick={onStockInButtonPressed}
            sx={{ flex: 1 }}
          >
            Stock In
          </Button>
          <Button
            variant={activeTab === 1 ? "contained" : "outlined"}
            onClick={onStockOutButtonPressed}
            sx={{ flex: 1 }}
          >
            Stock out
          </Button>
        </Box> */}

        <Box sx={{ width: "100%", height: "75%" }}>
          <BarChart
            sx={{
              width: "100%",
              height: "60%",
            }}
            series={[
              { data: stockIn, label: "Stock In", id: "pvId" },
              { data: stockOut, label: "Stock Out", id: "uvId" },
            ]}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DetailedView;
