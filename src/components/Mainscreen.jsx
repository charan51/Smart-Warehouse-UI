import { Box} from "@mui/material";
import NavigationBar from './NavigationBar';
import Header from "./Header.js";
import { Outlet } from "react-router-dom";

function Mainscreen() 
{
  return(
    <Box sx={{ display: 'flex', height:'100vh'}}>
      <Box sx={{ width: '6vw', overflow: 'hidden', margin:'5px', bgcolor:'background.dark'}}>
        <NavigationBar></NavigationBar>
      </Box>
      <Box sx={{ width: '94vw', overflow: 'hidden', margin:'5px', bgcolor:'background.dark'}}>
        <Header></Header>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

export default Mainscreen
