import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E63946', // Red
      light: '#FF6B6B',
      dark: '#B22A36',
    },
    secondary: {
      main: '#1D3557', 
      light: '#457B9D',
      dark: '#14253D',
    },
    background: {
      default: '#8b97a', 
      paper: '#FFFFFF',
      dark: '#8b97a9',
      light: '#F0F0F0',
      mid: '#a8dadc',
    },
    text: {
      default: '#ffffff',
      dark:'#000000',
      primary: '#1D3557',
      secondary: '#457B9D',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    // Add more typography styles as needed
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '16px', // Define font size for Tab component
          textTransform: 'none', // Remove uppercase
          color: '#641220', // Default unselected color
          "&.Mui-selected": {
            backgroundColor:'#E63946',
            color: '#ffffff', // Selected tab color
            borderBottom: '1px solid #000000',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderRight: '1px solid #ffffff', // Border for the Tabs container
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: 
        {
          "&:hover": {
            backgroundColor: "#f5f5f5", // Background color on hover
          },
          "&.Mui-selected": {
            backgroundColor: "#e0e0e0", // Background color for selected row
            outline: "2px solid red",
            "&:hover": {
              backgroundColor: "#d3d3d3", // Hover color for selected row
            },
          },
        },
        head: {
          backgroundColor: "#2b2d42", // Header row background color
          color: "#fff", // Header row text color
          fontSize: "16px", // Header row font size
        },
        body: {
          fontSize: "14px", // Body row font size
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'gray', // Default outline color
        },
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'darkgray', // Outline color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E63946', // Outline color when focused
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'darkgray', // Customize dropdown arrow color (optional)
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        color: 'black', // Default text color
        fontSize: '16px', // Default font size
        '&:hover': {
          backgroundColor: 'lightgray', // Background color on hover
        },
        '&.Mui-selected': {
          backgroundColor: 'blue', // Background color when selected
          color: 'white', // Text color when selected
        },
        '&.Mui-selected:hover': {
          backgroundColor: 'darkblue', // Background color when selected and hovered
        },
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        backgroundColor: 'white', // Background color for dropdown menu
      },
    },
  },
});

export default theme