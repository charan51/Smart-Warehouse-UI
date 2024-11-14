import LoginForm from "./components/login";
import RegisterForm from "./components/Register";
import Dashboard from "./components/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/protectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/Theme.js";
import Mainscreen from "./components/Mainscreen.jsx";
import Barcode from "./components/Barcode/barcode.jsx";
import ProductView from "./components/Barcode/productView.jsx";
const router = createBrowserRouter(
  [
    {
      //Later uncheck , commented to skip login
      element: <PrivateRoute />,
      element: <Mainscreen />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },

        {
          path: "/barcode",
          element: <Barcode />,
        },
        {
          path: "/product/:barcode", 
          element: <ProductView />,
        },
      ],
      errorElement: <div>404 not found</div>,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
  ],
  { basename: "/" }
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </ThemeProvider>
  );
}
export default App;
