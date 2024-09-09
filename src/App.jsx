
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import TeacherDetails from './Pages/TeacherDetails/TeacherDetails';


function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/teacher-details", element: <TeacherDetails /> },

      ],
    },]);

  return (
    <>
      <RouterProvider router={routers} />


    </>
  )
}

export default App
