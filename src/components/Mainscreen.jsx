import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Header from "./Header.js";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid2";
function Mainscreen() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid size={12}>
          <Header></Header>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid sx={{ bgcolor: "background.dark" }} size={{ xs: 12,md:1, lg:1}}>
          <NavigationBar></NavigationBar>
        </Grid>
        <Grid size={{ xs: 12,md:11, lg:11}}>
          <Outlet></Outlet>
        </Grid>
      </Grid>
    </>

    // <Box sx={{ display: 'flex', height:'100vh'}}>
    //   <Box sx={{ width: '6vw', overflow: 'hidden', margin:'5px', bgcolor:'background.dark'}}>
    //     <NavigationBar></NavigationBar>
    //   </Box>
    //   <Box sx={{ width: '94vw', overflow: 'hidden', margin:'5px', bgcolor:'background.dark'}}>

    //   </Box>
    // </Box>
  );
}

export default Mainscreen;
