import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/App.tsx'
import Navbar from './Component/Navbar.tsx'
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      // ใช้ App เป็นหน้าแรก
      { index: true, element: <App /> },
      { path: "/Aboute", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Register", element: <Register/> },
      { path: "/Login", element: <Login /> },
    ]
  }


];

const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />;
  </StrictMode>,
)
