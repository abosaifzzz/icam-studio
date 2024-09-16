
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import TeacherDetails from './Pages/TeacherDetails/TeacherDetails';
import SubjectDetails1 from './Pages/SubjectDetails1/SubjectDetails1';
import SubjectDetails2 from './Pages/SubjectDetails2/SubjectDetails2';


function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/teacher-details", element: <TeacherDetails /> },
        { path: "/subject-details1", element: <SubjectDetails1 /> },
        { path: "/subject-details2", element: <SubjectDetails2 /> }


      ],
    },]);

  return (
    <>
      <RouterProvider router={routers} />


    </>
  )
}

export default App
