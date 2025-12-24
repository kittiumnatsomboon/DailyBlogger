import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/App.tsx'
import Navbar from './Component/Navbar.tsx'

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
          // ใช้ App เป็นหน้าแรก
          index:true,
          element:<App/>
      }
    ]
  }


];

const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />;
  </StrictMode>,
)
