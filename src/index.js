import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import VerifyOtp from "./pages/Otp";
import Login from "./pages/login";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cart";
import ContextSetup from "./components/context";
import { Provider } from 'react-redux'
import store from './redux/store/store'
import { ToastContainer } from "react-toastify";
import EnrollModal from "./pages/Enroll";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  // {
  //   path: "/send-money",
  //   element: <SendMoney />,
  // },
  {
    path: "/enroll-modal/:id",
    element: <EnrollModal />,
  },
  {
    path: "/auth/sign-up",
    element: <Signup />,
  },
  {
    path: "/auth/verify-otp",
    element: <VerifyOtp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ContextSetup>
        <ToastContainer/>
      <RouterProvider router={router} />
    </ContextSetup>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
