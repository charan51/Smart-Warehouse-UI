import { AppBar, Typography, Button, Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/login";
import logo from "../Assets/Images/logo.png";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.dark" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <img src={logo} />
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography color="inherit" style={{ marginRight: "16px" }}>
            User Name
          </Typography>
          <Button variant="outlined" color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
