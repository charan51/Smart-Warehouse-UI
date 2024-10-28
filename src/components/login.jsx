import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/login";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {Button, Box,AppBar,Typography,Paper,TextField} from '@mui/material'; 
import { Email, Lock } from '@mui/icons-material';
import smartInventoryImage from '../Assets/Images/SIM_Bg.jpg';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  // useEffect(() => {
  //   auth.isAuthenticated ? navigate("/dashboard") : navigate("/login");
  // }, [auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('On Submit');
    // dispatch(login({ email, password })); Later uncheck the comment
    navigate("/dashboard")
  };

  return (
    <div >
      <AppBar position='static' sx={{ width:'100vw', backgroundColor: 'primary.dark' ,height:'3vw'}} >
        <Typography variant="h4" sx={{flexGrow:1, alignContent:'center',marginLeft:'5px'}}>
          <b> Smart Inventory Management </b>
        </Typography>
      </AppBar>
      <Box sx={{display: 'flex', flexDirection: 'column',marginTop:'5px',height:'100vh',alignItems:'center',backgroundImage: `url(${smartInventoryImage})`,backgroundSize: '100% auto',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: 450, marginTop:'10px', p: 3,borderRadius: 4,backgroundColor: 'rgba(255, 255, 255, 0.15)',backdropFilter: 'blur(10px)',boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',}}>
        <Typography variant="h5" component="h1" sx={{ mb: 2, textAlign: 'center', color: 'primary.dark' }}>
          LOGIN
        </Typography>
        <TextField fullWidth variant="standard" margin="normal" required id="email" label="Email ID" name="email" autoComplete="email" autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          slotProps={{
            startAdornment: <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />,
          }}
          sx={{ input: { color: 'white' }, label: { color: 'white' } }}
        />
        <TextField fullWidth variant="standard" margin="normal" required name="password" label="Password" type="password" id="password" autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={{
            startAdornment: <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />,
          }}
          sx={{ input: { color: 'white' }, label: { color: 'white' } }}
        />
        {/*<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
              />
            }
            label="Remember me"
            sx={{ color: 'white' }}
          />
          <Link href="#" variant="body2" sx={{ color: 'white' }}>
            Forgot Password?
          </Link>
        </Box> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: 'primary.dark', '&:hover': { backgroundColor: 'primary.main' }}}
        >
          LOGIN
        </Button>
      </Box>
        {/* <Paper elevation={3} sx={{ padding: '20px', border: '1px solid #ccc' ,width:'100%'}}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {auth.error && <p style={{ color: "red" }}>{auth.error}</p>}
          <Button variant="container" color='inherit' type="submit">
            Login
          </Button>
        </Form>
        </Paper> */}
      </Box>
      
    </div>
  );
};

export default LoginForm;
