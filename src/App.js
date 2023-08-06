// import logo from './logo.svg';
// import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import MainProducts from "./pages/MainProducts";
import ErrorPage from "./pages/ErrorPage";
import ContactUs from "./pages/ContactUs";
import ShopCart from "./pages/ShopCart";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="mainProducts"
          element={<MainProducts />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="contactUs"
          element={<ContactUs />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="shopCart"
          element={<ShopCart />}
          errorElement={<ErrorPage />}
        />
      </Route>
    )
  );

  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Home />
  </ErrorBoundary>;
  return <RouterProvider router={router} />;
  // <BrowserRouter>
  //   <Routes>
  //     <Route index element={<Home />} errorElement={<ErrorPage />} />
  //     <Route
  //       path="mainProducts"
  //       element={<MainProducts />}
  //       errorElement={<ErrorPage />}
  //     />
  //     <Route path="*" errorElement={<ErrorPage />} />
  //     {/* <Route element={<Home />}></Route> */}
  //   </Routes>
  // </BrowserRouter>
}

export default App;
