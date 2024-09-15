import React from 'react';
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/login';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                </Nav>
                <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            </Navbar>
            <h2>Welcome to the Dashboard</h2>
        </Container>
    );
};

export default Dashboard;
