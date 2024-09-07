
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';


function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },

      ],
    },]);

  return (
    <>
      <RouterProvider router={routers} />


    </>
  )
}

export default App
