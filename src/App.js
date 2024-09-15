import LoginForm from "./components/login";
import RegisterForm from "./components/Register";
import Dashboard from "./components/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/protectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>,
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
], { basename: "/" });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
