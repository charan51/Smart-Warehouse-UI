import StockDetails from "./StockDetails";
import { Box } from "@mui/material";
import StockList from "./StockList";

import Grid from '@mui/material/Grid2';
function Stocks() {
  return (
    <Grid container spacing={2}>
      <Grid size={12} sx={{padding: "5px",bgcolor: "background.dark" }}>
        <StockList></StockList>
      </Grid>
    </Grid>
  );
}

export default Stocks;
